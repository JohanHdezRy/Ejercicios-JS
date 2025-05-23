const obtenerValor = require('./nulos');

test('verifica valores nulos y definidos', () => {
  expect(obtenerValor('null')).toBeNull();
  expect(obtenerValor('undefined')).toBeUndefined();
  expect(obtenerValor('definido')).toBeDefined();
});