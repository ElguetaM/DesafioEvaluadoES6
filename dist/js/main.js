"use strict";

var _cliente = _interopRequireDefault(require("./cliente"));
var _impuesto = _interopRequireDefault(require("./impuesto"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ingresoClientes = [new _cliente["default"]("Roberto", new Impuesto(400000, 1000)), new _cliente["default"]("Juana", new Impuesto(90000, 100))];
console.log(_cliente["default"].nombre, _cliente["default"].calculoTotal);