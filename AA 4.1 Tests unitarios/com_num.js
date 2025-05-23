function compararNumeros(a, b) {
  return {
    mayor: a > b,
    menor: a < b,
    mayorIgual: a >= b
  };
}
module.exports = compararNumeros;