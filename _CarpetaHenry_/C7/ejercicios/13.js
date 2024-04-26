function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
    let pares = []
    for(let elemento of array){
      if (elemento % 2 === 0){
        pares.push(elemento)
      }

}
    
    return pares
}

module.exports = filtrarNumerosPares;
