const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Introduce el número de cursos: ', async (numCursos) => {
    readline.question('Introduce el número de alumnos por curso: ', async (numAlumnos) => {
      const notas = [];
      for (let i = 0; i < numCursos; i++) {
        const curso = [];
        console.log(`Introduce las notas de los ${numAlumnos} alumnos del curso ${i + 1}:`);
        for (let j = 0; j < numAlumnos; j++) {
          const nota = await preguntaCalif(`Nota del alumno ${j + 1}: `);
          curso.push(parseFloat(nota));
        }
        notas.push(curso);
      }
      console.log('Notas de los alumnos:');
      console.log(notas);
      readline.close();
    });
  });
  
  function preguntaCalif(pregunta) {
    return new Promise(resolve => {
      readline.question(pregunta, resolve);
    });
  }