let i = 1;
let aux1 = 0;
let aux2= 0;
while (i < 101) {
  console.log(i);
  if (i % 2 == 0){
    aux1 = i + aux1;
  }
  if (i % 2 !== 0){
    aux2 = i + aux2;
  }
  i++;
}
console.log(`La suma de los números pares es: ${aux1}`);
console.log(`La suma de los números impares es: ${aux2}`);