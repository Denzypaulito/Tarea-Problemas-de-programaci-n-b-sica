function romano(num) {
    if (num < 1 || num > 5000) {
      return "El número debe estar entre 1 y 5000";
    }
    const numsRom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numRom = "";
    let i = 0;
    while (num > 0) {
      const rep = Math.floor(num / nums[i]);
      num -= rep * nums[i];
      numRom += numsRom[i].repeat(rep);
      i++;
    }
    return numRom;
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Introduce un número entre 1 y 5000: ', num => {
    console.log(romano(parseInt(num)));
    readline.close();
  });