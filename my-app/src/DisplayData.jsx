
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayData = () => {
  const [data, setData] = useState([]);

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

  return (
    <div>
      <h2>Datos Recibidos</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>Nombre: {item.nombre}</p>
            <p>Email: {item.email}</p>
            <p>Especialidad: {item.especialidad}</p>
            <p>Horarios De Atencion: {item.horarios}</p>
            <p>Direccion: {item.Direccion}</p>
            <p>Género: {item.genero}</p>
            <p>Provincia: {item.provincia}</p>
            <p>Cedula Profecional: {item.cedula}</p>
            <p>Biografía: {item.biografia}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
