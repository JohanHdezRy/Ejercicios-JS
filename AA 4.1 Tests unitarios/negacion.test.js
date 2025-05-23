const Par = require('./negacion');

test('verifica que un número no es par', () => {
  expect(Par(3)).not.toBeTruthy();
  expect(5).not.toBe(4);
});