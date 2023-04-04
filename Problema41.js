const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function agregarRegistro() {
  rl.question('ID: ', (id) => {
    rl.question('Nombre: ', (nombre) => {
      rl.question('Apellidos: ', (apellidos) => {
        rl.question('Dirección: ', (direccion) => {
          rl.question('Estado: ', (estado) => {
            const registro = `${id},${nombre},${apellidos},${direccion},${estado}\n`;
            fs.appendFile('DATOS.DAT', registro, (err) => {
              if (err) throw err;
              console.log('Registro agregado correctamente.');
              mostrarMenu();
            });
          });
        });
      });
    });
  });
}

function mostrarMenu() {
  console.log("¿Qué deseas hacer?")
  console.log("(1) Agregar registro")
  console.log("(2) Salir ")
  rl.question('', (respuesta) => {
    if (respuesta === '1') {
      agregarRegistro();
    } else if (respuesta === '2') {
      rl.close();
    } else {
      console.log('Opción inválida. Por favor elige 1 o 2.');
      mostrarMenu();
    }
  });
}

mostrarMenu();