function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
if (array.length <= 1){
  return array
}if (typeof array[0] === 'string') {
  return array.sort();
} else if (typeof array[0] === 'number') {
  return array.sort((a, b) => a - b);
}

}

module.exports = ordenarArray;
