class Cliente {
  constructor(nombre, impuesto) {
    this.nombre = nombre;
    this.impuesto = impuesto;
  }
  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
  get impuesto() {
    return this._impuesto;
  }

  set impuesto(nuevoImpuesto) {
    this._impuesto = nuevoImpuesto;
  }

  calculoTotal() {
    return this.impuesto.calcularImpuesto();
  }
}

import Impuesto from "./impuesto.js";
export default Cliente;
