const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let nums = [];
  let i = 0;
  
  function askNumber() {
    readline.question('Introduce un número: ', valor => {
      nums.push(parseInt(valor));
      i++;
  
      if (i === 5) {
        const max = Math.max(...nums);
        const min = Math.min(...nums);
        console.log(`El número mayor es ${max} y el número menor es ${min}`);
        readline.close();
      } else {
        askNumber();
      }
    });
  }
  
  askNumber();