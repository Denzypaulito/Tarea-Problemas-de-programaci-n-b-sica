const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function leerRegistros(callback) {
  fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
    if (err) throw err;
    const registros = data.split('\n');
    callback(registros);
  });
}

function guardarRegistros(registros) {
  const data = registros.filter(Boolean).join('\n');
  fs.writeFile('DATOS.DAT', data, (err) => {
    if (err) throw err;
    console.log('Registro eliminado correctamente.');
    mostrarMenu();
  });
}

function eliminarRegistro(registros) {
  rl.question('ID del registro a eliminar: ', (id) => {
    const indice = registros.findIndex((registro) => registro.startsWith(id));
    if (indice !== -1) {
      registros.splice(indice, 1);
      guardarRegistros(registros);
    } else {
      console.log('El registro no existe.');
      mostrarMenu();
    }
  });
}

function mostrarMenu() {
    console.log("¿Qué deseas hacer?")
    console.log("(1) Agregar registro")
    console.log("(2) Eliminar registro")
    console.log("(3) Salir ")
    rl.question('', (respuesta) => {
    if (respuesta === '1') {
      agregarRegistro();
    } else if (respuesta === '2') {
      leerRegistros(eliminarRegistro);
    } else if (respuesta === '3') {
      rl.close();
    } else {
      console.log('Opción inválida. Por favor elige 1, 2 o 3.');
      mostrarMenu();
    }
  });
}

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

mostrarMenu();