const fs = require ('fs');

//usar el metodo withFile para escribir en un archivo
//fs.writeFile(file, data[, options], callback)
/*
fs.writeFile('archivo.txt', 'texto contenido del archivo', (err) => {
  if (err) throw err;
  console.log('El archivo ha sido creado');
});
*/

//modificar el archivo
//escribe aqui abajo

fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});