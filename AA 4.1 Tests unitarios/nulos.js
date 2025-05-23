function obtenerValor(tipo) {
  if (tipo === 'null') return null;
  if (tipo === 'undefined') return undefined;
  return 'definido';
}
module.exports = obtenerValor;