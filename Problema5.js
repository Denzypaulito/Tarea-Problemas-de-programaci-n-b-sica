let i = 1;
let aux = 0;
while (i < 101) {
    if (i % 2 !== 0){
        console.log(i);
        aux++;
  
    }
    i++; 
}
console.log(`El número de impares es: ${aux}`);