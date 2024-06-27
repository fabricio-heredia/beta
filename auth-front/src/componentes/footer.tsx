
import '../App.css'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


function Footer() {
    return (
        <div className="contenedor-footer">
 <div className="contenedor-footer">
    <div className="box-footer">
      <div className="logo2">
        <h4>Medicals</h4>
      </div>
      <div className="terminos">
        <p>
          Medicals es una pagina especializada en ayudar a encontrarte con tu especialista de cabezera dedicada, podes registrarte, solicitar turnos y confirmarlos ademas de revisar nuestra lista de profesionales disponibles.
          <br /> Ademas de siempre poder despejar todas tus dudas mediante nuestro Chat-Bot A.I. o contactarte con nuestros especialistas desde la pagina "contacto". Recorda que estamos siempre disponibles para asesorarte en lo que necesites.
        </p>
      </div>
    </div>
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={50} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={50} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={50} />
        </a>
      </div>
    </footer>

    <div className="box-footer">
      <h2>Soluciones</h2>
      <a href="#">Promocion Online</a>
      <a href="#">Marketing</a>
      <a href="#">Desarrollo</a>
      <a href="#">Venta online</a>
    </div>
    <div className="box-footer">
      <h2>Compañia</h2>
      <a href="#">Acerca de</a>
      <a href="#">Trabajo</a>
      <a href="#">Procesos</a>
      <a href="#">Servicio</a>
    </div>
  </div>
  <div className="box-copy">
    <hr />
    <p>
      Todos los derechos reservados © 2024 <b>Medicals</b>
    </p>
  </div>
  </div>
      
    );
  }
 

  export default Footer;