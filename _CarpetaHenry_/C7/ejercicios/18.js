function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
 let suma = 0
 for(let numero of resultadosTest){
  suma += numero
 }
 return suma / resultadosTest.length
}

module.exports = promedioResultadosTest;
