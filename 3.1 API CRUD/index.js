import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Usuario from './models/usuario.model.js';

dotenv.config();

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Bienvenido a mi API CRUD');
});


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/usuarios', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

app.listen(port,() =>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

//conexion a la base de datos

//define la URI
//const uri = "mongodb+srv://211k0041:naJlXtc65BHrLJNW@backend.tkvorcw.mongodb.net/?retryWrites=true&w=majority&appName=BackEnd";
const uri = process.env.uri;
//conecta a la base de datos
mongoose.connect(uri)
.then(()=>{
    console.log('Conectado a la base de datos');
})
.catch((error)=>{
    console.error('Error al conectar a la base de datos',error);
});
