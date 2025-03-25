import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';


const app = express();
const PORT = 3000;

const recetaJSON = `[
{
  "id": "0001",
  "tipo": "taco",
  "nombre": "Taco lechon",
  "precio": 20.00,
  "ingredientes": {
    "proteina": {
      "nombre": "Puerco",
      "preparacion": "Horneado"
    },
    "salsa": {
      "nombre": "Tomate verde",
      "picor": "Medio"
    },
    "acompañamientos": [
      {
        "nombre": "Cebolla",
        "cantidad": "1 cucharada",
        "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"]
      },
      {
        "nombre": "Guacamole",
        "cantidad": "2 cucharadas",
        "ingredientes": ["Aguacate", "Jugo de limon", "Sal", "Cebolla", "Cilantro"]
      }
    ]
  }
},
{
  "id": "0002",
  "tipo": "taco",
  "nombre": "Taco de Carne Asada",
  "precio": 25.00,
  "ingredientes": {
    "proteina": {
      "nombre": "Carne de res",
      "preparacion": "Asada"
    },
    "salsa": {
      "nombre": "Salsa roja",
      "picor": "Alto"
    },
    "acompañamientos": [
      {
        "nombre": "Cebolla",
        "cantidad": "1 cucharada",
        "ingredientes": ["Cebolla morada", "Cilantro", "Limón", "Sal"]
      },
      {
        "nombre": "Pico de gallo",
        "cantidad": "2 cucharadas",
        "ingredientes": ["Tomate", "Cebolla", "Cilantro", "Jalapeño", "Limón", "Sal"]
      }
    ]
  }
},
{
  "id": "0003",
  "tipo": "taco",
  "nombre": "Taco de Pescado",
  "precio": 30.00,
  "ingredientes": {
    "proteina": {
      "nombre": "Pescado blanco",
      "preparacion": "Frito"
    },
    "salsa": {
      "nombre": "Salsa de chipotle",
      "picor": "Medio"
    },
    "acompañamientos": [
      {
        "nombre": "Repollo",
        "cantidad": "1 cucharada",
        "ingredientes": ["Repollo morado", "Mayonesa", "Limón", "Sal"]
      },
      {
        "nombre": "Salsa de yogur",
        "cantidad": "2 cucharadas",
        "ingredientes": ["Yogur natural", "Pepino", "Ajo", "Limón", "Sal"]
      }
    ]
  }
},
{
  "id": "0004",
  "tipo": "taco",
  "nombre": "Taco de Pollo",
  "precio": 22.00,
  "ingredientes": {
    "proteina": {
      "nombre": "Pollo",
      "preparacion": "A la parrilla"
    },
    "salsa": {
      "nombre": "Salsa de aguacate",
      "picor": "Bajo"
    },
    "acompañamientos": [
      {
        "nombre": "Lechuga",
        "cantidad": "1 cucharada",
        "ingredientes": ["Lechuga romana", "Crema", "Sal"]
      },
      {
        "nombre": "Salsa de mango",
        "cantidad": "2 cucharadas",
        "ingredientes": ["Mango", "Cebolla", "Cilantro", "Limón", "Sal"]
      }
    ]
  }
}
]`;

const recetasTacos = JSON.parse(recetaJSON);

app.use(express.static('public'));
app.use(bodyParser.json());

app.get("/receta/:type", (req,res)=>{
  const elegirTaco = recetasTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
  res.json(elegirTaco || {error: 'No se encontro el taco'});
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`El servidor esta usando el puerto: ${PORT}`);
});
