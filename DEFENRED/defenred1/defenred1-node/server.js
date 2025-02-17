// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Crear la app con Express
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conexión con MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/defenred', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error conectando a MongoDB:', err));

// Esquema y modelo para "contacto"
const contactoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  telefono: String,
  aceptaPolitica: { type: Boolean, required: true },
  suscripcion: Boolean,
});

const Contacto = mongoose.model('Contacto', contactoSchema);

// Esquema y modelo para "colaboracion"
const colaboracionSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: String, required: true },
  cantidadDonacion: Number,
  aceptaPolitica: { type: Boolean, required: true },
  suscripcion: Boolean,
});

const Colaboracion = mongoose.model('Colaboracion', colaboracionSchema);

// Rutas

// Ruta para el formulario de "contacto"
app.post('/api/contacto', async (req, res) => {
  try {
    const nuevoContacto = new Contacto(req.body);
    await nuevoContacto.save();
    res.status(201).json({ message: 'Formulario de contacto enviado correctamente.' });
  } catch (error) {
    res.status(400).json({ error: 'Error al enviar el formulario de contacto.' });
  }
});

// Ruta para el formulario de "colaboracion"
app.post('/api/colaboracion', async (req, res) => {
  try {
    const nuevaColaboracion = new Colaboracion(req.body);
    await nuevaColaboracion.save();
    res.status(201).json({ message: 'Formulario de colaboración enviado correctamente.' });
  } catch (error) {
    res.status(400).json({ error: 'Error al enviar el formulario de colaboración.' });
  }
});

app.get("/", (req, res) => {
    res.send("Bienvenido al servidor de Defenred. Todo está funcionando correctamente.");
});

app.get('/api/contacto', (req, res) => {
    res.send('Ruta de contacto activa. Usa POST para enviar datos.');
});

app.get('/api/colabora', (req, res) => {
    res.send('Ruta de colabora activa. Usa POST para enviar datos.');
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
