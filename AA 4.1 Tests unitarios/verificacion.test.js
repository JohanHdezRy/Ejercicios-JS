const agregarElemento = require('./verificacion');

test('verifica contenido en array', () => {
  const frutas = agregarElemento(['manzana', 'pera'], 'banana');
  expect(frutas).toContain('banana');
});