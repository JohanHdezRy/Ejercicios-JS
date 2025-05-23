const compararNumeros = require('./com_num');

test('verifica comparaciones numéricas', () => {
  expect(compararNumeros(10, 5).mayor).toBeTruthy();
  expect(5).toBeLessThan(10);
  expect(10).toBeGreaterThanOrEqual(10);
});