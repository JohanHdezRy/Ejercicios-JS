import express from "express";

const app = express();
const port =3000;

app.get("/",(req,res) => {
    res.send("<h1>Bienvenido a mi pagina web<h1>")
});
app.get("/about",(req,res) => {
    res.send("<h1>Acerca de mi<h1>")
});
app.use("*",(req,res) => {
    res.status(404).send("<h1>Not found<h1>")
});

app.listen(port,() => {
    console.log("Servidor corriendo en http://localhost:3000");
});