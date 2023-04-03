const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let nums = [];
  let i = 0;
  let aux = 0;
  let aux1 = 0;
  let aux2 = 0;
  let aux3 = 0;
  
  function askNumber() {
    readline.question('Introduce un número: ', valor => {
      nums.push(parseInt(valor));
      i++;
  
      if (i === 2) {
        let max = Math.max(...nums);
        let min = Math.min(...nums);
        while (min < max - 1){
          aux3 = min + 1;
          console.log(aux3);
          if (aux3 % 2 === 0){
            aux1++;
          }
          if (aux3 % 2 !== 0){
            aux2 += aux3;
          }
          min++;
          aux++;
        }
        console.log(`El número de números totales es: ${aux}`);
        console.log(`El número de números pares es: ${aux1}`);
        console.log(`La suma de números impares es de: ${aux2}`);
        readline.close();
      } else {
        askNumber();
      }
    });
  }
  askNumber();