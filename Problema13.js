let valor = 100;
let i = 1;
let aux1 = 0;
let aux2 = 0;
    while (i <= valor) {
      
      if (i % 3 === 0){
        console.log(i);
        aux1++;
      }
      if (i % 2 === 0){
        console.log(i);
        aux2++;
      }
      
      
      i++;
    }
    console.log(`Número de multiplos de 3: ${aux1}`);
    console.log(`Número de multiplos de 2: ${aux2}`);