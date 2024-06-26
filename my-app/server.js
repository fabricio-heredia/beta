const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Reserva = require('./src/componentes/Reserva');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/formulario-react', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const formSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  password: String,
  especialidad: String,
  horarios: String,
  direccion: String,
  provincia: String,
  cedula: String,
  biografia: String
});

const Form = mongoose.model('Form', formSchema);

app.post('/api/form', async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(201).send(formData);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/form', async (req, res) => {
  try {
    const formData = await Form.find();
    res.status(200).send(formData);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/api/reserva', async (req, res) => {
  try {
    const reservaData = new Reserva(req.body);
    await reservaData.save();
    res.status(201).send(reservaData);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/reservas', async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.status(200).send(reservas);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/api/reservas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Reserva.findByIdAndDelete(id);
    res.status(200).send({ message: 'Reserva eliminada correctamente' });
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
