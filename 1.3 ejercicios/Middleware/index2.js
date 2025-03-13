import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import bodyParser from "body-parser"

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
    console.log(req.body);
    res.send("Datos recibidos");
    });

app.listen(PORT, (req,res)=>{
    console.log(`Server is running on port ${PORT}`);
});

function registrador(req,res,next){
    console.log(req.body);
    nombreEquipo = req.body["mascota"] + req.body["adjetivo"];
    next();
}

var nombreEquipo = "";
app.use(registrador);