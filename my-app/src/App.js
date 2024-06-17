import './App.css';
import Footer from './componentes/footer';
import Menu from './componentes/menu';
import DisplayData from './DisplayData';
import Form from './componentes/Form';

function App() {
  return (
    <div className="App">
      <div className="mother-box">
        <div className="caja-c1"><Menu/></div>
        <div className="caja-c2"><Form/><DisplayData /></div>
        <div className="caja-c3"><Footer/></div>
      </div>
    </div>
  );
}

export default App;
