function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let contador = 0
  for(let elemento of array){
    if (typeof elemento === "number" && elemento > 10){
      contador++
    }
  }
  return contador
}

module.exports = contarElementosMayoresA10;
