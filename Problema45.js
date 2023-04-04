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
      const indice = registros.findIndex((registro) => parseInt(registro.split(',')[0]) === parseInt(id));
      if (indice !== -1) {
        registros.splice(indice, 1);
        guardarRegistros(registros);
      } else {
        console.log('El registro no existe.');
        mostrarMenu();
      }
    });
  }

function verRegistro(registros) {
  rl.question('ID del registro a ver: ', (id) => {
    const indice = registros.findIndex((registro) => parseInt(registro.split(',')[0]) === parseInt(id));
    if (indice !== -1) {
      const registro = registros[indice].split(',');
      console.log(" ");
      console.log('Datos actuales:');
      console.log(`ID: ${registro[0]}`);
      console.log(`Nombre: ${registro[1]}`);
      console.log(`Apellidos: ${registro[2]}`);
      console.log(`Dirección: ${registro[3]}`);
      console.log(`Estado: ${registro[4]}`);
      console.log(" ");
      mostrarMenu();
    }})}
function modificarRegistro(registros) {
  rl.question('ID del registro a modificar: ', (id) => {
    const indice = registros.findIndex((registro) => parseInt(registro.split(',')[0]) === parseInt(id));
    if (indice !== -1) {
      const registro = registros[indice].split(',');
      console.log('Datos actuales:');
      console.log(`ID: ${registro[0]}`);
      console.log(`Nombre: ${registro[1]}`);
      console.log(`Apellidos: ${registro[2]}`);
      console.log(`Dirección: ${registro[3]}`);
      console.log(`Estado: ${registro[4]}`);
      rl.question('¿Qué campo(s) deseas modificar? (separa los campos con comas): ', (campos) => {
        const camposArray = campos.split(',');
        camposArray.forEach((campo) => {
          switch (campo.trim().toLowerCase()) {
            case 'id':
              rl.question('Nuevo ID: ', (idNuevo) => {
                registro[0] = idNuevo;
                const nuevosRegistros = [...registros.slice(0, indice), registro.join(','), ...registros.slice(indice + 1)];
                guardarRegistros(nuevosRegistros);
              });
              break;
            case 'nombre':
              rl.question('Nuevo nombre: ', (nombreNuevo) => {
                registro[1] = nombreNuevo;
                const nuevosRegistros = [...registros.slice(0, indice), registro.join(','), ...registros.slice(indice + 1)];
                guardarRegistros(nuevosRegistros);
              });
              break;
            case 'apellidos':
              rl.question('Nuevos apellidos: ', (apellidosNuevos) => {
                registro[2] = apellidosNuevos;
                const nuevosRegistros = [...registros.slice(0, indice), registro.join(','), ...registros.slice(indice + 1)];
                guardarRegistros(nuevosRegistros);
              });
              break;
            case 'dirección':
              rl.question('Nueva dirección: ', (direccionNueva) => {
                registro[3] = direccionNueva;
                const nuevosRegistros = [...registros.slice(0, indice), registro.join(','), ...registros.slice(indice + 1)];
                guardarRegistros(nuevosRegistros);
              });
              break;
            case 'estado':
              rl.question('Nuevo estado: ', (estadoNuevo) => {
                registro[4] = estadoNuevo;
                const nuevosRegistros = [...registros.slice(0, indice), registro.join(','), ...registros.slice(indice + 1)];
                guardarRegistros(nuevosRegistros);
              });
              break;
            default:
              console.log(`Campo "${campo}" no válido.`);
              mostrarMenu();
              return;
          }
        });
      });
    } else {
      console.log('El registro no existe.');
      mostrarMenu();
    }
  });
}

function mostrarMenu() {
  console.log("¿Qué deseas hacer?")
  console.log("(1) Agregar registro")
  console.log("(2) Modificar registro")
  console.log("(3) Eliminar registro")
  console.log("(4) Ver registro")
  console.log("(5) Salir ")
  rl.question('', (respuesta) => {
    if (respuesta === '1') {
      agregarRegistro();
    } else if (respuesta === '2') {
      leerRegistros(modificarRegistro);
    } else if (respuesta === '3') {
      leerRegistros(eliminarRegistro);
    } else if (respuesta === '4') {
      leerRegistros(verRegistro);
    } else if (respuesta === '5') {
      rl.close();
    } else {
      console.log('Opción no válida.');
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