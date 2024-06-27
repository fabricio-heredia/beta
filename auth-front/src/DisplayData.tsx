import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [reserva, setReserva] = useState({ fecha: '', usuario: '' });
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleReservaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReserva({ ...reserva, [name]: value });
  };

  const handleReservaSubmit = async (e: React.FormEvent<HTMLFormElement>, medicoId: string) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/reserva', { ...reserva, medicoId });
      alert('Reserva creada exitosamente');
      setReserva({ fecha: '', usuario: '' });
    } catch (error) {
      console.error('Error creando la reserva:', error);
    }
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item: any) =>
    item.especialidad.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Medicos Disponibles</h2>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar por especialidad"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="card-container">
        {filteredData.map((item: any, index: number) => (
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
                <input
                  type="datetime-local"
                  name="fecha"
                  value={reserva.fecha}
                  onChange={handleReservaChange}
                  required
                  min={getCurrentDateTime()} // Establecer el valor mínimo
                />
              </label>
              <label>
                Nombre Del Paciente:
                <input
                  type="text"
                  name="usuario"
                  value={reserva.usuario}
                  onChange={handleReservaChange}
                  required
                />
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
