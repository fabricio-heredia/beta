import  { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";


const DisplayData1 = () => {
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
      <h2>Medicos Disponibles</h2>
      <div className="card-container">
        {data.map((item: any, index: number) => (
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
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayData1;