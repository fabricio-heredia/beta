import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [reserva, setReserva] = useState({ fecha: '', usuario: '' });
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/form');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    const fetchReservas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reservas');
        const now = new Date();
        const filteredReservas = response.data.filter(reserva => new Date(reserva.fecha) > now);
        setReservas(filteredReservas);
      } catch (error) {
        console.error('Error fetching the reservations:', error);
      }
    };

    fetchData();
    fetchReservas();
  }, []);

  const handleReservaChange = (e) => {
    const { name, value } = e.target;
    setReserva({ ...reserva, [name]: value });
  };

  const handleReservaSubmit = async (e, medicoId) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/reserva', { ...reserva, medicoId });
      alert('Reserva creada exitosamente');
      setReservas([...reservas, response.data]);
      setReserva({ fecha: '', usuario: '' });
    } catch (error) {
      console.error('Error creando la reserva:', error);
    }
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60000;
    const localISOTime = new Date(now - offset).toISOString().slice(0, 16);
    return localISOTime;
  };

  const removePastReservations = async () => {
    const now = new Date();
    const updatedReservas = reservas.filter(reserva => new Date(reserva.fecha) > now);
    setReservas(updatedReservas);
  };

  useEffect(() => {
    const interval = setInterval(removePastReservations, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Medicos Disponibles</h2>
      <div className="card-container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <p><strong>Nombre:</strong> {item.nombre}</p>
            <p><strong>Especialidad:</strong> {item.especialidad}</p>
            <div className="details">
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Horarios De Atencion:</strong> {item.horarios}</p>
              <p><strong>Direccion:</strong> {item.direccion}</p>
              <p><strong>Provincia:</strong> {item.provincia}</p>
              <p><strong>Cedula Profecional:</strong> {item.cedula}</p>
              <p><strong>Biografía:</strong> {item.biografia}</p>
            </div>
            <form className="reserva-form" onSubmit={(e) => handleReservaSubmit(e, item._id)}>
              <label>
                Fecha:
                <input type="datetime-local" name="fecha" value={reserva.fecha} min={getCurrentDateTime()} onChange={handleReservaChange} required />
              </label>
              <label>
                Nombre Del Paciente:
                <input type="text" name="usuario" value={reserva.usuario} onChange={handleReservaChange} required />
              </label>
              <button type="submit">Agendar Consulta</button>
            </form>
          </div>
        ))}
      </div>
      <h2>Lista de Pacientes que Agendaron Cita</h2>
      <ol>
        {reservas.map((reserva, index) => (
          <li key={index}>
            <p><strong>Paciente:</strong> {reserva.usuario}</p>
            <p><strong>Fecha:</strong> {new Date(reserva.fecha).toLocaleString()}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DisplayData;
