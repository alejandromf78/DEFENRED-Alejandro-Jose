const express = require('express');
const path = require('path');
const cors = require("cors");
const mongoose = require('./functions/Conexion');
const Formulario = require('./schemas/formularioSchema');

const puerto = 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta para insertar datos del formulario
app.post("/insertarFormulario", (req, res) => {
    const datos = req.body;
    console.log(datos);

    const nuevoFormulario = new Formulario({
        nombre: datos.nombre,
        email: datos.email,
        telefono: datos.telefono,
        cantidadDonacion: datos.cantidadDonacion,
        aceptaPoliticas: datos.aceptaPoliticas,
        deseaSuscribirse: datos.deseaSuscribirse
    });

    nuevoFormulario.save()
        .then((form) => {
            console.log("Formulario guardado correctamente:", form);
            res.send("Formulario guardado correctamente");
        })
        .catch((error) => {
            console.error("Error al guardar el formulario:", error);
            res.status(500).send("Error al guardar el formulario");
        });
});

// Ruta para obtener todos los formularios
app.get("/obtenerFormularios", async (req, res) => {
    try {
        const formularios = await Formulario.find();
        res.json(formularios);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los formularios" });
    }
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(puerto, () => {
    console.log(`El servidor ha arrancado en el puerto ${puerto}`);
});
