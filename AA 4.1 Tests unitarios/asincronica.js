// Versión simplificada de fetchData
function fetchData(exito) {
  return new Promise((resolve, reject) => {
    if (exito) {
      resolve('operación exitosa');
    } else {
      reject('hubo un error');
    }
  });
}
module.exports = fetchData;