const validarCorreo = require('./coincidencia');

test('verifica formato de correo', () => {
  expect(validarCorreo('test@example.com')).toBeTruthy();
  expect('Hello World').toMatch(/World/);
});