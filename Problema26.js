function imprimirEnCentro(frase) {
    const anchoConsola = process.stdout.columns;
    const espacios = Math.floor((anchoConsola - frase.length) / 2);
    console.log(" ".repeat(espacios) + frase);
  }

  function imprimirFrase() {
    imprimirEnCentro(frase);
    readline.close();
  }

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let frase = "";
  
  function pedirFrase() {
    readline.question('Introduce una frase: ', valor => {
      frase = valor;
      imprimirFrase();
      readline.close();
    });
  }
pedirFrase();