import PortalLayout from "../layout/PortalLayout";
import Menu from '../componentes/menu';

import Footer from "../componentes/footer";
import DisplayDateTime from "../componentes/DisplayDateTime";


export default function User() {
  return (
    <PortalLayout>
      
      <div className="App">
      <div className="mother-box">
        <div className="caja-c1"><Menu/></div>
        <h1>Pacientes</h1>
        <div className="caja-c2">
          <DisplayDateTime/>
          </div>
        <div className="caja-c3"><Footer/></div>
      </div>
    </div>
      
    </PortalLayout>
  );
}