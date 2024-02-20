const ingresoClientes = [
  new Cliente("Roberto", new Impuesto(400000, 1000)),
  new Cliente("Juana", new Impuesto(90000, 300)),
];

console.log(ingresoClientes)
console.log((Cliente.nombre), (Cliente.calculoTotal))

import Cliente from "./cliente";
import Impuestos from "./impuesto";
