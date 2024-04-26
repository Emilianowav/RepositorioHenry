function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma = 0
  for(let elemento of arrayOfNums){
    suma = elemento + suma
  }
  return suma
}

module.exports = agregarNumeros;
