"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.symbol.description.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Impuesto = /*#__PURE__*/function () {
  function Impuesto(montoBrutoAnual, deduccion) {
    _classCallCheck(this, Impuesto);
    this.montoBrutoAnual = montoBrutoAnual;
    this.deduccion = deduccion;
  }
  _createClass(Impuesto, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._montoBrutoAnual;
    },
    set: function set(nuevoMonto) {
      this._montoBrutoAnual = nuevoMonto;
    }
  }, {
    key: "deduccion",
    get: function get() {
      return this._deduccion;
    },
    set: function set(nuevoDeduccion) {
      this._deduccion = nuevoDeduccion;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this.montoBrutoAnual - this.deduccion) * 0.21;
    }
  }]);
  return Impuesto;
}();
var _default = exports["default"] = Impuesto;