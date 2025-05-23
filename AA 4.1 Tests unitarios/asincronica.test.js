const fetchData = require('./asincronica');

test('prueba de resolución exitosa', async () => {
  await expect(fetchData(true)).resolves.toBe('operación exitosa');
});

test('prueba de rechazo', async () => {
  await expect(fetchData(false)).rejects.toBe('hubo un error');
});