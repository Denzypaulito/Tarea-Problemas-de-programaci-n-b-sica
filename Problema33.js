const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const calf = [];
  
  readline.question('Introduce la calificación de la asignatura 1: ', (calf1) => {
    calf.push(Number(calf1));
  
  readline.question('Introduce la calificación de la asignatura 2: ', (calf2) => {
    calf.push(Number(calf2));
  
  readline.question('Introduce la calificación de la asignatura 3: ', (calf3) => {
    calf.push(Number(calf3));
  
  readline.question('Introduce la calificación de la asignatura 4: ', (calf4) => {
    calf.push(Number(calf4));
  
  readline.question('Introduce la calificación de la asignatura 5: ', (calf5) => {
    calf.push(Number(calf5));
  
  readline.question('Introduce la calificación de la asignatura 6: ', (calf6) => {
    calf.push(Number(calf6));
  
  readline.question('Introduce la calificación de la asignatura 7: ', (calf7) => {
    calf.push(Number(calf7));
  
  readline.question('Introduce la calificación de la asignatura 8: ', (calf8) => {
    calf.push(Number(calf8));
  
  readline.question('Introduce la calificación de la asignatura 9: ', (calf9) => {
    calf.push(Number(calf9));
  
  readline.question('Introduce la calificación de la asignatura 10: ', (calf10) => {
    calf.push(Number(calf10));
  
    let suma = 0;
      for (let i = 0; i < calf.length; i++) {
        suma += calf[i];}
        const promedio = suma / calf.length;
        console.log(`El promedio del alumno es: ${promedio}`);
        readline.close();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });