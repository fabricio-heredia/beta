import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [reserva, setReserva] = useState({ fecha: '', usuario: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/form');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };
    fetchData();
  }, []);

  const handleReservaChange = (e) => {
    const { name, value } = e.target;
    setReserva({ ...reserva, [name]: value });
  };

  const handleReservaSubmit = async (e, medicoId) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/reserva', { ...reserva, medicoId });
      alert('Reserva creada exitosamente');
      setReserva({ fecha: '', usuario: '' });
    } catch (error) {
      console.error('Error creando la reserva:', error);
    }
  };

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
                <input type="datetime-local" name="fecha" value={reserva.fecha} onChange={handleReservaChange} required />
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
    </div>
  );
};

export default DisplayData;

