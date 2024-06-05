const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const moment = require('moment');

app.use(cors());
app.use(express.json());
app.listen(7000, () => {
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
    const acercaDelAutor = req.body.acercaDelAutor;
    const textoArticulo = req.body.textoArticulo;

    //Validar la fecha antes de actualizar los datos:
    if (!moment(req.body.fecha, "YYYY-MM-DD", true).isValid()) {
        res.send("La fecha proporcionada no es válida.");
        return;
    }

    //Formatear fecha:
    const fecha = moment(req.body.fecha, "YYYY-MM-DD").format("YYYY-MM-DD");

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
    bd.query("SELECT * FROM " + tabla, (error, result) => {
        if (error) {
            console.log(error);
            res.send("Ocurrió un error al cargar los artículos. Inténtelo otra vez.");
        } else {
            result.forEach(articulo => {
                // Formatear fechas antes de enviar los datos:
                if (articulo.fecha) {
                    articulo.fecha = moment(articulo.fecha).format("DD-MM-YYYY");
                }
            });

            res.send(result);
        }
    });
});


app.put("/actualizar", (req, res) => {
    const identificador = req.body.identificador;
    const titulo = req.body.titulo;
    const tema = req.body.tema;
    const descripcion = req.body.descripcion;
    const nombreAutor = req.body.nombreAutor;
    const acercaDelAutor = req.body.acercaDelAutor;
    const textoArticulo = req.body.textoArticulo;
    const idArticulo = req.body.idArticulo;

    //Validar la fecha antes de actualizar los datos:
    if (!moment(req.body.fecha, "DD-MM-YYYY", true).isValid()) {
        res.send("La fecha proporcionada no es válida.");
        return;
    }

    //Formatear fecha:
    const fecha = moment(req.body.fecha, "DD-MM-YYYY").format("YYYY-MM-DD");

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