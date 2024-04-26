function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  if(Number.isInteger(num/2)){
    return false
  }
  else return true
}

module.exports = esImpar;