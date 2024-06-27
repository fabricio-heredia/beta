import mongoose from 'mongoose';

const reservaSchema = new mongoose.Schema({
  medicoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  fecha: { type: Date, required: true },
  usuario: { type: String, required: true }
});

const Reserva = mongoose.model('Reserva', reservaSchema);

export default Reserva;



