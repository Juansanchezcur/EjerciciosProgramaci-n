const logger = require("../utils/logger");
import { message } from "../services/email.service.js";
import { sendMailEthereal } from "../controllers/user.controllers";
import {
  sendWhattsapToHost,
  sendWhatsappToClient,
} from "../controllers/sms.controller";

import {
  newCart,
  getCartById,
  updateCart,
  deleteCart,
} from "../services/carrito.service";

import { getProductById } from "../services/products.service";

export const nuevoCarrito = async (req, res) => {
  const nuevoCarrito = {
    productos: [],
  };
  const carritoAgregado = await newCart(nuevoCarrito);

  res.json({
    msg: "Carrito guardado con Éxito",
    Carrito: carritoAgregado,
  });
};

export const productosDelCarrito = async (req, res) => {
  try {
    const id = req.params.id;
    let carrito = await getCartById(id);
    console.log(carrito);
    if (carrito.length == 1) {
      if (carrito[0].productos.length < 1) {
        logger.error(`El carrito con id:${id} todavía no tiene productos`);
        res.json({
          msg: `El carrito con id:${id} todavía no tiene productos`,
        });
      } else {
        res.json({
          productos: carrito[0].productos,
        });
      }
    } else {
      logger.error("error, carrito no encontrado");
      return res.status(404).json({
        msg: "error, carrito no encontrado",
      });
    }
  } catch (err) {
    logger.error("Hubo un error, por favor verifica los datos" + err);
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
};

export const agregarProductoAlCarrito = async (req, res) => {
  try {
    const { id_carrito, id_prod } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      logger.error("cantidad ingresada menor a 0");
      return res.status(400).json({
        msg: "Por favor, ingresa una cantidad mayor a 0 ",
      });
    }
    //Traigo los datos de los archivos
    const carrito = await getCartById(id_carrito);

    const producto = await getProductById(id_prod);
    console.log("producto ", producto);
    if (!carrito) {
      logger.error("error, carrito no encontrado");
      return res.status(404).json({
        msg: "error, carrito no encontrado",
      });
    }

    if (!producto) {
      logger.error("error, producto no encontrado");
      return res.status(404).json({
        msg: "error, producto no encontrado",
      });
    }
    if (quantity > producto.stock) {
      logger.error(
        "La cantidad elegida no es correcta, elija por favor un número entre 1 y el stock máximo"
      );
      return res.status(400).json({
        msg: "La cantidad elegida no es correcta, elija por favor un número entre 1 y el stock máximo",
        stock: producto.stock,
      });
    }

    const nuevoProducto = {
      _id: producto[0]._id,
      quantity,
      description: producto[0].description,
      code: producto[0].code,
      photo: producto[0].photo,
      price: producto[0].price,
    };
    console.log(carrito);
    if (carrito[0].productos) {
      carrito[0].productos.push(nuevoProducto);
    } else {
      carrito[0].productos = [];
      carrito[0].productos.push(nuevoProducto);
    }
    console.log("tengo estos productos: ", carrito[0].productos);
    const CarritoActualizado = await updateCart(
      id_carrito,
      { productos: carrito[0].productos },
      { new: true }
    );
    res.json({
      msg: "Producto guardado con Éxito",
      producto: nuevoProducto,
      Carrito: CarritoActualizado,
    });
  } catch (err) {
    logger.error("Hubo un error, por favor verifica los datos " + err);
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
};

export const borrarCarrito = async (req, res) => {
  try {
    const { id } = req.params;
    const carritoBorrado = await deleteCart(id);
    console.log(carritoBorrado);
    if (carritoBorrado) {
      res.json({
        msg: `Borrando carrito con id ${id}`,
        producto: carritoBorrado,
      });
    } else {
      logger.error("error, carrito no encontrado");
      return res.status(404).json({
        msg: "error, carrito no encontrado",
      });
    }
  } catch (err) {
    logger.error("Hubo un error, por favor verifica los datos");
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
};

export const borrarProductoDelCarrito = async (req, res) => {
  try {
    const { id_carrito, id_prod } = req.params;

    const carritoElegido = await getCartById(id_carrito);

    if (!carritoElegido) {
      logger.error("error, carrito no encontrado");
      return res.status(404).json({
        msg: "error, carrito no encontrado",
      });
    }
    console.log(carritoElegido + "asdasfasfasfa");

    const productoElegido = carritoElegido[0].productos.find(
      (unProducto) => unProducto._id == id_prod
    );

    console.log(productoElegido);
    if (productoElegido == undefined) {
      logger.error("error, producto no encontrado");
      return res.status(404).json({
        msg: "error, producto no encontrado",
      });
    }

    carritoElegido[0].productos.splice(productoElegido, 1);

    const CarritoActualizado = await updateCart(
      { _id: id_carrito },
      { productos: carritoElegido[0].productos },
      { new: true }
    );

    res.json({
      msg: `Borrando producto ${id_prod} del carrito ${id_carrito}`,
      carrito_actualizado: CarritoActualizado,
    });
  } catch (err) {
    logger.error("Hubo un error, por favor verifica los datos" + err);
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
};

export const confirmarCarrito = async (req, res) => {
  try {
    const { id_carrito } = req.params;

    const carrito = await getCartById(id_carrito);
    logger.info(carrito);
    //Envío de Whatsapp
    const listadoDeproductos = carrito[0].productos.map(
      (producto) => `ID: ${producto._id}      Cantidad ${producto.quantity} \n`
    );
    const hostMessage = `Carrito confirmado:\n \n Productos: \n\n${listadoDeproductos}`;
    const userMessage = `Querido ${req.user.username}:\n \nQuedó confirmado su carrito con los siguientes productos: \n\n${listadoDeproductos}\n\n A la brevedad nos contactaremos con usted`;

    sendWhattsapToHost(hostMessage),
      sendWhatsappToClient(userMessage),
      //Envío de Email
      (message.text = `Carrito confirmado:\n \n Productos: \n\n${listadoDeproductos}`),
      (message.subject = `Carrito confirmado Usuario: ${req.user.username}`);
    sendMailEthereal();
    //borrar Carrito
    await deleteCart(id_carrito);
    res.json({
      msg: "Confirmación de compra exitosa",
      Carrito: id_carrito,
    });
  } catch (error) {
    logger.error("Hubo un error, por favor verifica los datos " + error);
    return res.status(404).json({
      msg: "Hubo un error, por favor verifica los datos",
    });
  }
};
