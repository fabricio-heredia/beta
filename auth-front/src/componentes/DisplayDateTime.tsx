import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Reserva {
  fecha: string;
  usuario: string;
}

const DisplayDateTime: React.FC = () => {
  const [reservas, setReservas] = useState<Reserva[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Reserva[]>('http://localhost:5000/api/reserva');
        console.log(response.data); // Log para verificar los datos recibidos
        setReservas(response.data);
      } catch (error) {
        console.error('Error fetching the reservations:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Citas Registradas</h2>
      <ul>
        {reservas.length > 0 ? (
          reservas.map((reserva, index) => (
            <li key={index}>
              Fecha y Hora: {new Date(reserva.fecha).toLocaleString()} - Paciente: {reserva.usuario}
            </li>
          ))
        ) : (
          <li>No hay reservas registradas</li>
        )}
      </ul>
    </div>
  );
};

export default DisplayDateTime;



