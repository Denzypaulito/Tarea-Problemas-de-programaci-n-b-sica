const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Si quieres terminar el programa introduce 'salir'")
  console.log("Por favor ingresa una frase")
  let i = 0;
  function pedirFrase() {
    readline.question('',respuesta => {
      i++;
      console.log(i);
      if (respuesta !== 'salir') {
        pedirFrase();
      } else {
        readline.close();
      }
    });
  }
  
  pedirFrase();