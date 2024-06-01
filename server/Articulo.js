const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.listen(3000, () => {
    console.log("Corriendo Server API Rest para Articulo.");
});

const bd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bdtarea"
})

const tabla = "tbArticulo";
const atributosTabla = "identificador, titulo, tema, descripcion, nombreAutor, fecha, acercaDelAutor, textoArticulo";
const atributosTablaSET = "identificador = ?, titulo = ?, tema = ?, descripcion = ?, nombreAutor = ?, fecha = ?, acercaDelAutor = ?, textoArticulo = ?";

app.post("/agregar", (req, res) => {
    const identificador = req.body.identificador;
    const titulo = req.body.titulo;
    const tema = req.body.tema;
    const descripcion = req.body.descripcion;
    const nombreAutor = req.body.nombreAutor;
    const fecha = req.body.fecha;
    const acercaDelAutor = req.body.acercaDelAutor;
    const textoArticulo = req.body.textoArticulo;

    bd.query(
        "INSERT INTO " + tabla + " (" + atributosTabla + ") VALUES (?,?,?,?,?,?,?,?)", 
        [identificador, titulo, tema, descripcion, nombreAutor, fecha, acercaDelAutor, textoArticulo],
        (error, result) => {
            if(error){
                console.log(error);
                res.send("Ocurrió un error al guardar el artículo. Inténtelo otra vez.");
            }else{
                res.send("Artículo guardado correctamente.")
            }
        }
    )
})

app.get("/cargar", (req, res) => {
    bd.query("SELECT * FROM " + tabla), (error, result) => {
        if(error){
            console.log(error);
            res.send("Ocurrió un error al cargar los artículos. Inténtelo otra vez.");
        }else{
            res.send(result)
        }
    }
})

app.put("/actualizar", (req, res) => {
    const identificador = req.body.identificador;
    const titulo = req.body.titulo;
    const tema = req.body.tema;
    const descripcion = req.body.descripcion;
    const nombreAutor = req.body.nombreAutor;
    const fecha = req.body.fecha;
    const acercaDelAutor = req.body.acercaDelAutor;
    const textoArticulo = req.body.textoArticulo;
    const idArticulo = req.body.idArticulo;

    bd.query(
        "UPDATE " + tabla + " SET " + atributosTablaSET + " WHERE idArticulo = ?", 
        [identificador, titulo, tema, descripcion, nombreAutor, fecha, acercaDelAutor, textoArticulo, idArticulo],
        (error, result) => {
            if(error){
                console.log(error);
                res.send("Ocurrió un error al actualizar el artículo. Inténtelo otra vez.");
            }else{
                res.send("Artículo actualizado correctamente.")
            }
        }
    )

})

app.delete("/eliminar/:idArticulo", (req, res) => {
    const idArticulo = req.params.idArticulo;

    bd.query(
        "DELETE FROM " + tabla + " WHERE idArticulo = ?", [idArticulo],
        (error, result) => {
            if(error){
                console.log(error);
                res.send("Ocurrió un error al eliminar el artículo. Inténtelo otra vez.");
            }else{
                res.send("Artículo eliminado correctamente.")
            }
        }
    )
})