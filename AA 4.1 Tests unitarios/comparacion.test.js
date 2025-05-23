const crearObjeto = require('./comparacion');

test('verifica igualdad de objetos', () => {
  const obj1 = crearObjeto('Juan', 30);
  const obj2 = { nombre: 'Juan', edad: 30 };
  expect(obj1).toEqual(obj2);
});