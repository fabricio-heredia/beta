const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  fecha: Date,
  usuario: String,
  medicoId: mongoose.Schema.Types.ObjectId
});

const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;
