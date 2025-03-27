import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';


const app = express();
const PORT = 3000;

const temasJSON = `[
  {
    "id": "001",
    "nombre": "Programación básica",
    "descripcion": "Fundamentos esenciales de programación",
    "palabrasClaves": ["variables", "bucles", "funciones", "sintaxis"],
    "practicas": [
      {
        "titulo": "Hola Mundo",
        "descripcion": "Crear tu primer programa que muestre un mensaje",
        "objetivo": "Familiarizarse con la sintaxis básica"
      },
      {
        "titulo": "Calculadora simple",
        "descripcion": "Programa que realice operaciones aritméticas básicas",
        "objetivo": "Aprender a trabajar con operadores"
      }
    ]
  },
  {
    "id": "002",
    "nombre": "Estructuras de datos",
    "descripcion": "Manejo de colecciones de información",
    "palabrasClaves": ["arrays", "objetos", "listas", "diccionarios"],
    "practicas": [
      {
        "titulo": "Lista de tareas",
        "descripcion": "Implementar un sistema para gestionar tareas pendientes",
        "objetivo": "Aprender a trabajar con arrays"
      },
      {
        "titulo": "Agenda de contactos",
        "descripcion": "Crear un sistema para almacenar información de contactos",
        "objetivo": "Practicar el uso de objetos"
      }
    ]
  },
  {
    "id": "003",
    "nombre": "Programación Orientada a Objetos",
    "descripcion": "Conceptos avanzados de POO",
    "palabrasClaves": ["clases", "objetos", "herencia", "polimorfismo", "encapsulamiento"],
    "practicas": [
      {
        "titulo": "Creación de clases",
        "descripcion": "Implementar clases básicas con atributos y métodos",
        "objetivo": "Comprender los fundamentos de POO"
      },
      {
        "titulo": "Sistema de herencia",
        "descripcion": "Crear una jerarquía de clases con herencia",
        "objetivo": "Aplicar el principio de herencia"
      },
      {
        "titulo": "Implementación de interfaces",
        "descripcion": "Crear e implementar interfaces en clases",
        "objetivo": "Entender el polimorfismo"
      }
    ]
  }
]`;

const alumnotemas = JSON.parse(temasJSON);

app.use(express.static('public'));
app.use(bodyParser.json());

app.get("/tema/:type", (req,res)=>{
  const elegirTema = alumnotemas.find(r => r.nombre.palabrasClaves.practicas.toLowerCase() === req.params.type.toLowerCase());
  res.json(elegirTema || {error: 'No se encontro el tema'});
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`El servidor esta usando el puerto: ${PORT}`);
});
