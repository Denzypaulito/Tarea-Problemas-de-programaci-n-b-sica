function shell(matriz) {
    let filas = matriz.length;
    let esp = Math.floor(filas / 2);
  
    while (esp > 0) {
      for (let i = esp; i < filas; i++) {
        let j = i;
        while (j >= esp && matriz[j - esp][0] > matriz[j][0]) {
          let temp = matriz[j];
          matriz[j] = matriz[j - esp];
          matriz[j - esp] = temp;
          j -= esp;
        }
      }
      esp = Math.floor(esp / 2);
    }
  
    return matriz;
  }
  let matriz = [
    [3, 6, 1],
    [7, 2, 5],
    [1, 9, 3],
    [4, 8, 2],
  ];
  
  matriz = shell(matriz);
  
  console.log("Matriz ordenada por método SHELL:");
  console.table(matriz);