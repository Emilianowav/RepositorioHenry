function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let newArray = []
  for(let elemento of array){
    newArray.push(elemento.toUpperCase());
  }
  return newArray
}

module.exports = convertirStringAMayusculas;
