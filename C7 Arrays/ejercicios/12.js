function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var mayusculas = []
for( var i= 0; i < array.length; i++ ){
   mayusculas.push(array[i].toUpperCase())
}
return mayusculas
}

module.exports = convertirStringAMayusculas;
