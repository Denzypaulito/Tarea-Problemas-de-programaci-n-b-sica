const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el estado que desea buscar: ', (estado) => {
  let registros = fs.readFileSync('DATOS.DAT', 'utf8').split('\n');
  for (let i = 0; i < registros.length; i++) {
    let registro = registros[i].trim();
    if (registro !== '') {
      let campos = registro.split(',');
      if (campos[4] === estado) {
        console.log(registro);
      }
    }
  }
  rl.close();
});