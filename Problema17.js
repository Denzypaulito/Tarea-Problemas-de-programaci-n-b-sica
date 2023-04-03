const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let nums = [];
  let i = 0;
  let aux1 = 0;
  let aux2 = 0;
  
  function askNumber() {
    readline.question(`Introduce el ${i === 0 ? 'primer' : 'segundo'} número: `, valor => {
      nums.push(parseInt(valor));
      i++;
  
      if (i === 2 && nums[1] >= nums[0]) {
        let max = Math.max(...nums);
        let min = Math.min(...nums);
        while (min <= max){
          let aux3 = min;
          if (aux3 % 2 === 0){
            console.log(aux3);
            aux1++;
            aux2 += aux3;
          }
          min++;
        }
        console.log(`El número de múltiplos de 2 es: ${aux1}`);
        console.log(`La suma de los múltiplos de 2 es: ${aux2}`);
        readline.close();
      } else {
        if (i === 2) {
          console.log('El segundo número debe ser mayor o igual que el primero');
          readline.close();
        } else {
          askNumber();
        }
      }
    });
  }
  
  askNumber();
  