import logo from './logo.svg';
import './App.css';
import Logo from'./components/Logo'
import Entrega from './components/Entrega';
import BodyComponent from'./components/Body'
import EntrarIcon from './components/Entrar';
import Carrinho from './components/Carrinho';
import { useEffect,useState } from 'react';
function App() {

  const [json, setJSON] = useState([])

  useEffect(()=>{
      fetch('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products',{method:'GET'})
      .then(response => response.json())
      .then((data)=>{
        setJSON(data);})
      .catch((err)=> console.log(err))
    },[])

    if(json[0]== undefined){
      return <h4>Carregando ...</h4>
    }

  return (
    
    <div>
      <header className="Header">
        <Logo/>
        <Entrega json = {json}/>
        
          <input type='search' class='search-input' placeholder='Busque por estabelecimento ou produtos'/>
        <EntrarIcon/>
        <Carrinho/>
      </header>

      {/* ------ corpo do site* ----- */}
      <BodyComponent json={json}/>
      
    </div>
  );
}

export default App;
