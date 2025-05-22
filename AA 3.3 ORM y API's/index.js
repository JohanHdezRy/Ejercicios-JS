import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a la base de datos
const uri = process.env.uri;
let db;

MongoClient.connect(uri)
    .then(client => {
        console.log('Conectado a la base de datos');
        db = client.db('test');
    })
    .catch(error => {
        console.error('Error al conectar a la base de datos', error);
    });

// Rutas CRUD
app.post('/usuarios', async (req, res) => {
    try {
        const usuario = await db.collection('usuarios').insertOne(req.body);
        res.status(201).json(usuario.ops[0]);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

app.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await db.collection('usuarios').findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: req.body },
            { returnOriginal: false }
        );

        if (!usuario.value) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario.value);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await db.collection('usuarios').findOneAndDelete({ _id: new ObjectId(id) });

        if (!usuario.value) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await db.collection('usuarios').find().toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

app.get('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
