let totalVentas = {};

let productos = ['producto1', 'producto2', 'producto3', 'producto4'];
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

let ventas = [
  {representante: 'R1', mes: 'enero', producto1: 10, producto2: 15, producto3: 5, producto4: 8},
  {representante: 'R1', mes: 'febrero', producto1: 12, producto2: 18, producto3: 6, producto4: 9},
  {representante: 'R1', mes: 'marzo', producto1: 14, producto2: 23, producto3: 7, producto4: 10},
  {representante: 'R1', mes: 'abril', producto1: 10, producto2: 15, producto3: 5, producto4: 8},
  {representante: 'R1', mes: 'mayo', producto1: 12, producto2: 18, producto3: 10, producto4: 9},
  {representante: 'R1', mes: 'junio', producto1: 14, producto2: 21, producto3: 7, producto4: 10},
  {representante: 'R1', mes: 'julio', producto1: 10, producto2: 15, producto3: 5, producto4: 8},
  {representante: 'R1', mes: 'agosto', producto1: 12, producto2: 18, producto3: 6, producto4: 9},
  {representante: 'R1', mes: 'septiembre', producto1: 14, producto2: 21, producto3: 7, producto4: 10},
  {representante: 'R1', mes: 'octubre', producto1: 10, producto2: 9, producto3: 5, producto4: 8},
  {representante: 'R1', mes: 'noviembre', producto1: 12, producto2: 18, producto3: 6, producto4: 9},
  {representante: 'R1', mes: 'diciembre', producto1: 14, producto2: 21, producto3: 7, producto4: 10},
  {representante: 'R2', mes: 'enero', producto1: 10, producto2: 15, producto3: 5, producto4: 8},
  {representante: 'R2', mes: 'febrero', producto1: 12, producto2: 18, producto3: 9, producto4: 9},
  {representante: 'R2', mes: 'marzo', producto1: 11, producto2: 21, producto3: 7, producto4: 10},
  {representante: 'R2', mes: 'abril', producto1: 10, producto2: 15, producto3: 5, producto4: 8},
  {representante: 'R2', mes: 'mayo', producto1: 12, producto2: 18, producto3: 6, producto4: 9},
  {representante: 'R2', mes: 'junio', producto1: 11, producto2: 21, producto3: 7, producto4: 10},
  {representante: 'R2', mes: 'julio', producto1: 10, producto2: 15, producto3: 5, producto4: 8},
  {representante: 'R2', mes: 'agosto', producto1: 12, producto2: 18, producto3: 6, producto4: 9},
  {representante: 'R2', mes: 'septiembre', producto1: 14, producto2: 21, producto3: 7, producto4: 10},
  {representante: 'R2', mes: 'octubre', producto1: 10, producto2: 15, producto3: 5, producto4: 8},
  {representante: 'R2', mes: 'noviembre', producto1: 5, producto2: 18, producto3: 10, producto4: 3},
  {representante: 'R2', mes: 'diciembre', producto1: 14, producto2: 21, producto3: 7, producto4: 10},
  {representante: 'R3', mes: 'enero', producto1: 10, producto2: 15, producto3: 5, producto4: 8},
  {representante: 'R3', mes: 'febrero', producto1: 12, producto2: 18, producto3: 6, producto4: 9},
  {representante: 'R3', mes: 'marzo', producto1: 14, producto2: 21, producto3: 7, producto4: 10},
  {representante: 'R3', mes: 'abril', producto1: 10, producto2: 12, producto3: 5, producto4: 8},
  {representante: 'R3', mes: 'mayo', producto1: 12, producto2: 18, producto3: 6, producto4: 9},
  {representante: 'R3', mes: 'junio', producto1: 14, producto2: 21, producto3: 7, producto4: 4},
  {representante: 'R3', mes: 'julio', producto1: 10, producto2: 15, producto3: 10, producto4: 8},
  {representante: 'R3', mes: 'agosto', producto1: 12, producto2: 18, producto3: 6, producto4: 9},
  {representante: 'R3', mes: 'septiembre', producto1: 14, producto2: 15, producto3: 7, producto4: 2},
  {representante: 'R3', mes: 'octubre', producto1: 10, producto2: 15, producto3: 5, producto4: 8},
  {representante: 'R3', mes: 'noviembre', producto1: 12, producto2: 18, producto3: 6, producto4: 9},
  {representante: 'R3', mes: 'diciembre', producto1: 24, producto2: 21, producto3: 7, producto4: 10}
];



for (let i = 0; i < ventas.length; i++) {
  let venta = ventas[i];
  let mes = venta.mes;
  
  for (let j = 0; j < productos.length; j++) {
    let producto = productos[j];
    let total = venta[producto];
    
    if (totalVentas[mes]) {
      if (totalVentas[mes][producto]) {
        totalVentas[mes][producto] += total;
      } else {
        totalVentas[mes][producto] = total;
      }
    } else {
      totalVentas[mes] = {};
      totalVentas[mes][producto] = total;
    }
  }
}

console.log('Total de ventas por mes y por producto:');
console.table(totalVentas);