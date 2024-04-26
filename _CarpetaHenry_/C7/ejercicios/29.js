function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
    if(numeros.length < 1){
      return null
    }
  for(let i = 0; i < numeros.length ;i ++){
    let elemento = numeros[i]
    if (elemento !== i){
      return elemento;
    }
}
}
module.exports = encontrarNumeroFaltante;