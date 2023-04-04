let i = 0;
let intentos = 0;

while (intentos < 100) {
  const dado1 = Math.floor(Math.random() * 6) + 1; 
  const dado2 = Math.floor(Math.random() * 6) + 1; 
  const suma = dado1 + dado2;

  if (suma === 10) {
    i++;
  }

  intentos++;
}

console.log(`De 100 tiradas, los dados sumaron 10 en ${i} ocasiones.`);