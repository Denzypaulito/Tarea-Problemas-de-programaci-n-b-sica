const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let frase = "";
  
  function pedirFrase() {
    readline.question('Introduce una frase: ', valor => {
      frase = valor;
      imprimirFrase();
    });
  }
  
  function imprimirFrase() {
    let i = 1;
    while (i <= 5) {
      let espacio = "";
      for (let j = 1; j <= i; j++) {
        espacio += "    "; 
      }
      console.log(espacio + frase);
      i++;
    }
    readline.close();
  }
  
  pedirFrase();
  