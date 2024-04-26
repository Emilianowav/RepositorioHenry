function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let contador = 0
  for(let numero of numeros){
    if(numero % 2 !==0){
      continue
    }
    contador++
  }
  return contador
}

module.exports = contarParesConContinue;
