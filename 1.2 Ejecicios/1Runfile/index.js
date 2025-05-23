//comentarios de una sola linea
/*comentarios 
multilinea*/
 
//-----------------------------------------------------------------------------

//2 Declarar diferentes tipos de variables y mostrar sus valores por consola.
/*
let numero = 1;
let texto1 = "juan";
let nulo= null;
let indefinido = undefined;
var Boolean = true;
const texto = "juan";
var edad = 30;
const objeto = { nombre: "johan", edad: 22 };
const array = [1, 2, 3, 4, 5];

//mostrarlos en la consola

console.log(numero);
console.log(texto1);
console.log(nulo);
console.log(indefinido);
console.log(Boolean);
console.log(texto);
console.log(edad);
console.log(objeto);
console.log(array);
*/

//-----------------------------------------------------------------------------

// 3 crear un array con 5 diferentes tipos de datos
/*
let edad = 30;
let objeto = { nombre: "johan", edad: 22 };
let Boolean = true;

const array2= [1, "juan",edad, objeto, Boolean];
console.log(array2);
*/

//-----------------------------------------------------------------------------

//4 Escribe una función que tome dos números y aplique una operación. 
/*
function suma(a, b) {
  return a + b;
}
console.log(suma(2, 3));
*/

//-----------------------------------------------------------------------------

//5 Crea una función flecha que reciba un string y lo imprima en mayúsculas.
/*
let textos= "hola";
const mayusculas = (textos) => {
    return textos.toUpperCase();
    }
console.log(mayusculas(textos));
*/

//-----------------------------------------------------------------------------

//6 Implementa un bucle que imprima los números del 1 al 10.
/*
let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}
*/

//-----------------------------------------------------------------------------

//7 Crea un objeto que represente un objeto del mundo real con sus respectivas propiedades.
/*
const taza = {
  propietario: "johan",
  tamano: 30,
  color: "negro",
};
console.log(taza);
*/
//-----------------------------------------------------------------------------------

//8 Agrega un método al objeto creado anteriormente e imprima una descripción del mismo
/*
const taza = {
  propietario: "johan",
  tamano: 30,
  color: "negro",
describir: function() {
    console.log(`Esta taza es de ${this.propietario}, tiene un tamano de ${this.tamano} cm y es de color ${this.color}.`);
}
};
taza.describir();
*/
//---------------------------------------------------------------------------------------

//9 Crea un módulo que contenga funciones matemáticas básicas (suma, resta, etc.) y utilízalo en otro archivo.
/*
const ej9 = require('./ej9');
console.log("suma", ej9.sumar(3,2));
console.log("resta", ej9.restar(3,2));
console.log("multiplicacion", ej9.multiplicar(3,2));
*/

//--------------------------------------------------------------------------------------

//10 Escribe una función que simule una operación asincrónica utilizando setTimeout y maneje el resultado con un callback.
//*
// Funcion que simula una operación asincronica
function asincronica(datos, callback) {
    // Simulamos un retraso de 6 segundos (6000 milisegundos)
    setTimeout(() => {
      // Supongamos que procesamos los datos y obtenemos un resultado
      const resultado = `Procesado: ${datos.toUpperCase()}`;
      // Llamamos al callback con el resultado
      callback(null, resultado); // El primer parametro es para errores (null en este caso)
    }, 6000);
  }
  
  // Uso de la funcin con un callback
  asincronica("hola mundo", (error, resultado) => {
    if (error) {
      console.error("Ocurrio un error:", error);
    } else {
      console.log("Resultado de la operación asincronica:", resultado);
    }
  });
  
  console.log("La operación asincronica ha comenzado...");
//*/

//11 Escribe un bloque de código que intente convertir una cadena a un número y que maneje cualquier error que pueda ocurrir.
/*
function convertir(cadena){
  try {
    const numero = Number(cadena);
    if (isNaN(numero)) {
      throw new Error("El valor no es un número válido");
    }
    console.log("Número convertido:", numero);
  } catch (error) {
    console.error("Ocurrió un error:", error.message);
  }
}
convertir("123");
convertir("abc");
*/