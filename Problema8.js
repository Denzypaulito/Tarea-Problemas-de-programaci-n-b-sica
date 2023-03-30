const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Introduce S o N");
  function verificar() {
    readline.question('',respuesta => {
      if (respuesta !== 'S' && respuesta !== 'N' ) {
        console.log("!!Introduce S o N¡¡");
        verificar();
      } else {
        console.log(`Elegiste ${respuesta}`);
        readline.close();
      }
    });
  }
  
  verificar();