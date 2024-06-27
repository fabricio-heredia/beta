
import './App.css';


import Menu from './componentes/menu.jsx';
import DisplayData from './DisplayData.jsx';
import Form from './componentes/Form.jsx';
import Footer from "./componentes/footer.jsx";


function App() {
  return (
    <div className="App">
      <div className="mother-box">
      <div className="caja-c0"><Form/></div>
        <div className="caja-c1"><Menu/></div>
        <div className="caja-c2"><DisplayData/><button><a href='https://api.whatsapp.com/send?phone=5215585261805'>consulta whatsapp</a></button></div>
        <div className="caja-c3"><Footer/></div>
      </div>
    </div>
  );
}

export default App;
