const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let frase = "";
  let letra = "";
  let aux = 0;
  
  function oracion() {
    readline.question('Introduce una frase: ', valor => {
      frase = valor;
      caracter();
    });
  }
  
  function caracter() {
    readline.question('Introduce una letra: ', valor => {
      letra = valor;
      for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === letra) {
          aux++;
        }
      }
      console.log(`La letra "${letra}" aparece ${aux} veces en la frase "${frase}"`);
      readline.close();
    });
  }
  
  oracion();