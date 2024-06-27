import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import "../App.css";

interface FormData {
  nombre: string;
  email: string;
  password: string;
  especialidad: string;
  horarios: string;
  direccion: string;
  genero: string;
  provincia: string;
  cedula: string;
  biografia: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
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

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/form', formData);
      alert('Datos enviados exitosamente');
      setIsFormVisible(false);
    } catch (error) {
      console.error('Error enviando los datos:', error);
    }
  };

  const handleCancel = () => {
    setIsFormVisible(false);
  };

  return (
    <div>
      {!isFormVisible && (
        <button onClick={() => setIsFormVisible(true)}>Registrarse</button>
      )}

      {isFormVisible && (
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
          
          <label>Provincia:
            <input type="text" name="provincia" value={formData.provincia} onChange={handleChange} required />
          </label><br />

          <label>Cedula Profesional:
            <input type="text" name="cedula" value={formData.cedula} onChange={handleChange} required />
          </label><br />
          
          <label>Biografía:
            <textarea name="biografia" value={formData.biografia} onChange={handleChange}></textarea>
          </label><br />
          
          <button type="submit">Mandar Registro</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </form>
      )}
    </div>
  );
};

export default Form;
