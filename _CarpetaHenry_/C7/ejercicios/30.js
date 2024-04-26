function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let elementosVistos = {};
  for (let i = 0; i < numeros.length; i++) {
    if (elementosVistos[numeros[i]] !== undefined) {
      return numeros[i];
    } else {
      elementosVistos[numeros[i]] = true;
      console.log("elementosVistos:", elementosVistos);
    }
  }

  return null;
return null
}

module.exports = encontrarElementoRepetido;


var mundo = {continentes : 7, paises :195, oceanos:5}
for (let prop in mundo){
  console.log("Esta es la propiedad" + prop)
  console.log("Este es el valor" + mundo[prop])
}