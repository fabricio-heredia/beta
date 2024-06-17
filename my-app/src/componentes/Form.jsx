import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    especialidad: '',
    horarios: '',
    direccion: '',
    genero: '',
    provincia: '',
    cedula: '',
    biografia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/form', formData);
      alert('Datos enviados exitosamente');
    } catch (error) {
      console.error('Error enviando los datos:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </label><br />
      
      <label>Correo Electrónico:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label><br />
      
      <label>Contraseña:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label><br />
      
      <label>Especialidad:
      <input type="text" name="especialidad" value={formData.especialidad} onChange={handleChange} required />
      </label><br />
      
      <label>Horarios De Atencion:
      <input type="text" name="horarios" value={formData.horarios} onChange={handleChange} required />
      </label><br />

      <label>Direccion De La Clinica/Consultorio:
      <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
      </label><br />

      <label>Género:
        <input type="radio" name="genero" value="hombre" checked={formData.genero === 'hombre'} onChange={handleChange} /> Hombre
        <input type="radio" name="genero" value="mujer" checked={formData.genero === 'mujer'} onChange={handleChange} /> Mujer
        <input type="radio" name="genero" value="otro" checked={formData.genero === 'otro'} onChange={handleChange} /> Otro
      </label><br />
      
      <label>Provincia:
      <input type="text" name="provincia" value={formData.provincia} onChange={handleChange} required />
      </label><br />

      <label>Cedula Profecional:
      <input type="text" name="cedula" value={formData.cedula} onChange={handleChange} required />
      </label><br />
      
      <label>Biografía:
        <textarea name="biografia" value={formData.biografia} onChange={handleChange}></textarea>
      </label><br />
      
      <button type="submit">Mandar Registro</button>
    </form>
  );
};

export default Form;
