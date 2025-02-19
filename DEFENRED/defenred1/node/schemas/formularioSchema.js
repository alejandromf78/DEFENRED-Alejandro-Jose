const mongoose = require('mongoose');

const formularioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: String,  
        required: true
    },
    cantidadDonacion: {
        type: Number,
        required: false
    },
    aceptaPoliticas: {
        type: Boolean,
        required: true
    },
    deseaSuscribirse: {
        type: Boolean,
        required: false
    }
});

module.exports = mongoose.model('Formulario', formularioSchema);
