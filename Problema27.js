const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let aux = 0;
function num(){
    console.log("*****Tablas de Multiplicar*****")
    readline.question('Introduce un número ', valor => {
      if (isNaN(valor)) {
        console.log('El valor no es un número');
        num();
        return;}
      for (let i = 1; i < 11; i++) {
        aux = valor * i;
        console.log(`${valor} * ${i} = ${aux}`);
      }
      readline.close();
    });
}
num();