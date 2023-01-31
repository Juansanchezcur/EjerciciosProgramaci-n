"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _sms = require("../controllers/sms.controller");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require("express"),
  Router = _require.Router;
var rutaCarrito = Router();
var carritoModel = require("../models/carrito");
var productModel = require("../models/products");
var logger = require("../utils/logger");
rutaCarrito.post("/", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var nuevoCarrito, carritoAgregado;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nuevoCarrito = {
              productos: []
            };
            _context.next = 3;
            return carritoModel.create(nuevoCarrito);
          case 3:
            carritoAgregado = _context.sent;
            res.json({
              msg: "Carrito guardado con Éxito",
              Carrito: carritoAgregado
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
rutaCarrito.get("/:id/productos", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, carrito;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return carritoModel.find({
              _id: id
            });
          case 4:
            carrito = _context2.sent;
            console.log(carrito);
            if (!(carrito.length == 1)) {
              _context2.next = 10;
              break;
            }
            if (carrito[0].productos.length < 1) {
              logger.error("El carrito con id:".concat(id, " todav\xEDa no tiene productos"));
              res.json({
                msg: "El carrito con id:".concat(id, " todav\xEDa no tiene productos")
              });
            } else {
              res.json({
                productos: carrito[0].productos
              });
            }
            _context2.next = 12;
            break;
          case 10:
            logger.error("error, carrito no encontrado");
            return _context2.abrupt("return", res.status(404).json({
              msg: "error, carrito no encontrado"
            }));
          case 12:
            _context2.next = 18;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            logger.error("Hubo un error, por favor verifica los datos");
            return _context2.abrupt("return", res.status(404).json({
              msg: "Hubo un error, por favor verifica los datos"
            }));
          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
rutaCarrito.post("/:id_carrito/productos/:id_prod", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$params, id_carrito, id_prod, quantity, carrito, producto, nuevoProducto, CarritoActualizado;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$params = req.params, id_carrito = _req$params.id_carrito, id_prod = _req$params.id_prod;
            quantity = req.body.quantity;
            if (!(!quantity || quantity < 1)) {
              _context3.next = 6;
              break;
            }
            logger.error("cantidad ingresada menor a 0");
            return _context3.abrupt("return", res.status(400).json({
              msg: "Por favor, ingresa una cantidad mayor a 0 "
            }));
          case 6:
            _context3.next = 8;
            return carritoModel.find({
              _id: id_carrito
            });
          case 8:
            carrito = _context3.sent;
            _context3.next = 11;
            return productModel.find({
              _id: id_prod
            });
          case 11:
            producto = _context3.sent;
            console.log("producto ", producto);
            if (carrito) {
              _context3.next = 16;
              break;
            }
            logger.error("error, carrito no encontrado");
            return _context3.abrupt("return", res.status(404).json({
              msg: "error, carrito no encontrado"
            }));
          case 16:
            if (producto) {
              _context3.next = 19;
              break;
            }
            logger.error("error, producto no encontrado");
            return _context3.abrupt("return", res.status(404).json({
              msg: "error, producto no encontrado"
            }));
          case 19:
            if (!(quantity > producto.stock)) {
              _context3.next = 22;
              break;
            }
            logger.error("La cantidad elegida no es correcta, elija por favor un número entre 1 y el stock máximo");
            return _context3.abrupt("return", res.status(400).json({
              msg: "La cantidad elegida no es correcta, elija por favor un número entre 1 y el stock máximo",
              stock: producto.stock
            }));
          case 22:
            nuevoProducto = {
              _id: producto[0]._id,
              quantity: quantity,
              description: producto[0].description,
              code: producto[0].code,
              photo: producto[0].photo,
              price: producto[0].price
            };
            console.log(carrito);
            carrito[0].productos.push(nuevoProducto);
            console.log("tengo estos productos: ", carrito[0].productos);
            _context3.next = 28;
            return carritoModel.findByIdAndUpdate({
              _id: id_carrito
            }, {
              productos: carrito[0].productos
            }, {
              "new": true
            });
          case 28:
            CarritoActualizado = _context3.sent;
            res.json({
              msg: "Producto guardado con Éxito",
              producto: nuevoProducto,
              Carrito: CarritoActualizado
            });
            _context3.next = 36;
            break;
          case 32:
            _context3.prev = 32;
            _context3.t0 = _context3["catch"](0);
            logger.error("Hubo un error, por favor verifica los datos");
            return _context3.abrupt("return", res.status(404).json({
              msg: "Hubo un error, por favor verifica los datos"
            }));
          case 36:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 32]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
rutaCarrito["delete"]("/:id", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, carritoBorrado;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return carritoModel.findByIdAndDelete({
              _id: id
            });
          case 4:
            carritoBorrado = _context4.sent;
            console.log(carritoBorrado);
            if (!carritoBorrado) {
              _context4.next = 10;
              break;
            }
            res.json({
              msg: "Borrando carrito con id ".concat(id),
              producto: carritoBorrado
            });
            _context4.next = 12;
            break;
          case 10:
            logger.error("error, carrito no encontrado");
            return _context4.abrupt("return", res.status(404).json({
              msg: "error, carrito no encontrado"
            }));
          case 12:
            _context4.next = 18;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            logger.error("Hubo un error, por favor verifica los datos");
            return _context4.abrupt("return", res.status(404).json({
              msg: "Hubo un error, por favor verifica los datos"
            }));
          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 14]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
rutaCarrito["delete"]("/:id_carrito/productos/:id_prod", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$params2, id_carrito, id_prod, carritoElegido, productoElegido, CarritoActualizado;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$params2 = req.params, id_carrito = _req$params2.id_carrito, id_prod = _req$params2.id_prod;
            _context5.next = 4;
            return carritoModel.find({
              _id: id_carrito
            });
          case 4:
            carritoElegido = _context5.sent;
            if (carritoElegido) {
              _context5.next = 8;
              break;
            }
            logger.error("error, carrito no encontrado");
            return _context5.abrupt("return", res.status(404).json({
              msg: "error, carrito no encontrado"
            }));
          case 8:
            console.log(carritoElegido);
            productoElegido = carritoElegido[0].productos.find(function (unProducto) {
              return unProducto._id == id_prod;
            });
            console.log(productoElegido);
            if (!(productoElegido == undefined)) {
              _context5.next = 14;
              break;
            }
            logger.error("error, producto no encontrado");
            return _context5.abrupt("return", res.status(404).json({
              msg: "error, producto no encontrado"
            }));
          case 14:
            carritoElegido[0].productos.splice(productoElegido, 1);
            _context5.next = 17;
            return carritoModel.findByIdAndUpdate({
              _id: id_carrito
            }, {
              productos: carritoElegido[0].productos
            }, {
              "new": true
            });
          case 17:
            CarritoActualizado = _context5.sent;
            res.json({
              msg: "Borrando producto ".concat(id_prod, " del carrito ").concat(id_carrito),
              carrito_actualizado: CarritoActualizado
            });
            _context5.next = 25;
            break;
          case 21:
            _context5.prev = 21;
            _context5.t0 = _context5["catch"](0);
            logger.error("Hubo un error, por favor verifica los datos");
            return _context5.abrupt("return", res.status(404).json({
              msg: "Hubo un error, por favor verifica los datos"
            }));
          case 25:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 21]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
rutaCarrito.post("/:id_carrito/confirmar", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id_carrito, carrito, listadoDeproductos;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id_carrito = req.params.id_carrito;
            _context6.next = 4;
            return carritoModel.find({
              _id: id_carrito
            });
          case 4:
            carrito = _context6.sent;
            logger.info(carrito["_id"]);
            listadoDeproductos = "";
            /*  carrito.productos.foreach((producto) => {
              listadoDeproductos.concat(`${producto._id}+ ${producto.quantity}\n`);
            });
            console.log(listadoDeproductos);
            const hostMessage = `Carrito confirmado:\n \n Productos: \n\n${listadoDeproductos}`;
            const userMessage = `Carrito confirmado:\n Productos: \n\n${listadoDeproductos}\n\n a la brevedad nos contactaremos con usted`;
            sendWhattsapToHost(hostMessage),
              sendWhatsappToClient(userMessage), */
            //await carritoModel.findByIdAndDelete({ _id: id_carrito });
            res.json({
              msg: "Confirmación de compra exitosa",
              Carrito: id_carrito
            });
            _context6.next = 14;
            break;
          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            logger.error("Hubo un error, por favor verifica los datos " + _context6.t0);
            return _context6.abrupt("return", res.status(404).json({
              msg: "Hubo un error, por favor verifica los datos"
            }));
          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
module.exports = rutaCarrito;