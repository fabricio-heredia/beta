import { Link } from "react-router-dom";
import React from "react";
import Menu from '../componentes/menu';
import DisplayData from '../DisplayData';
import Footer from "../componentes/footer";
import DisplayDateTime from "../componentes/DisplayDateTime";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}
export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="App">
      <div className="mother-box">
        <div className="caja-c1"><Menu/></div>
        <div className="caja-c2">
        <DisplayData/>
        
          <button>
            <a href='https://api.whatsapp.com/send?phone=5215585261805'>consulta whatsapp</a>
          </button>
          </div>
        <div className="caja-c3"><Footer/></div>
      </div>
    </div>

      <main>{children}</main>
    </>
  );
}
