
import PortalLayout from "../layout/PortalLayout";
import Menu from '../componentes/menu';

import Footer from "../componentes/footer";

import Form from '../componentes/Form'

export default function Profile() {
  return (
    <PortalLayout>
      
      <div className="App">
      <div className="mother-box">
        <div className="caja-c1"><Menu/></div>
        <h1>Profile</h1>
        <div className="caja-c2">
          <Form/>
       
          </div>
        <div className="caja-c3"><Footer/></div>
      </div>
    </div>
      
    </PortalLayout>
  );
}
