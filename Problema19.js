const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let hora = 0;
  let minutos = 0;
  let segundos = 0;
  
  function ponerEnHora() {
    readline.question('Introduce la hora (formato 24 horas): ', valor => {
      hora = parseInt(valor);
      readline.question('Introduce los minutos: ', valor => {
        minutos = parseInt(valor);
        readline.question('Introduce los segundos: ', valor => {
          segundos = parseInt(valor);
          console.log(`El reloj ha sido puesto en hora: ${hora}:${minutos}:${segundos}`);
          actualizarReloj();
        });
      });
    });
  }
  
  function actualizarReloj() {
    setInterval(() => {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
          minutos = 0;
          hora++;
          if (hora === 24) {
            hora = 0;
          }
        }
      }
      console.log(`${hora}:${minutos}:${segundos}`);
    }, 1000);
  }
  
  ponerEnHora();