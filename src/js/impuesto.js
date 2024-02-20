class Impuesto {
  constructor(montoBrutoAnual, deduccion) {
    this.montoBrutoAnual = montoBrutoAnual;
    this.deduccion = deduccion;
  }
  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }

  set montoBrutoAnual(nuevoMonto) {
    this._montoBrutoAnual = nuevoMonto;
  }
  get deduccion() {
    return this._deduccion;
  }

  set deduccion(nuevoDeduccion) {
    this._deduccion = nuevoDeduccion;
  }

  calcularImpuesto() {
    return (this.montoBrutoAnual - this.deduccion) * 0.21
  }
}

export default Impuesto;