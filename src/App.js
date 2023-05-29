import logo from './logo.svg';
import './App.css';
import Logo from'./components/Logo'
import Entrega from './components/Entrega';
import BodyComponent from'./components/Body'
import EntrarIcon from './components/Entrar';
import Carrinho from './components/Carrinho';
import ButtonProduct from './components/ButtonProduct';
function App() {
  return (
    
    <div>
      <header className="Header">
        <Logo/>
        <Entrega/>
        
          <input type='search' class='search-input' placeholder='Busque por estabelecimento ou produtos'/>
        <EntrarIcon/>
        <Carrinho/>
      </header>

      {/* ------ corpo do site* ----- */}
      <BodyComponent/>
      
    </div>
  );
}

export default App;
