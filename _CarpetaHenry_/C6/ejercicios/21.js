//function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  const esPotenciaDeDos = (numero) => {
    let result = 1;
    let exponente = 0;
  
    while (result < numero) {
      result *= 2;
      exponente++;
    }
  
    return result === numero;
  };


module.exports = esPotenciaDeDos;
