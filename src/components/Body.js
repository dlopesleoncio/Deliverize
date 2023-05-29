import { useState } from "react"
import { StyledBodyIngrediente } from './styles/IngredienteBody.styled'
import Ingrediente from './Ingrediente'
import Counter from "./Counter"
import CounterProdut from './CounterProdutButton'
import Alimento from './images/alimento.png'
import ButtonProduct from "./ButtonProduct"
export default function BodyComponent(){
    //let a1,a2,a3,a4;

    // Testar se tem mais que 8 ingredientes
    const [nIngrendient, setIngValue] = useState(0);

    function testNumber(value){
        if(value == 1){
            setIngValue(nIngrendient + 1)
        }
        else{
            setIngValue(nIngrendient - 1)
        }
        
    }

    return (

        <div className="cBody">

            <div className='countainer-produto'>  
                <div className='imagem-produto'>
                    <img src={Alimento} style={{width:'100%'}}></img>
                </div>
                <div className='nome-produto'>Picanha do Lula</div>
                <div className='descricao-produto'>Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim</div>
                <div className='produto-preco'>R$ ????</div>
                <div className='preco-desconto'>????</div>
            </div>

            <StyledBodyIngrediente>
                <div className="container-ingrediente">
                    <div className="header-ingredientes">
                        <div className="tituloIngrediente"> Adicionar ingredientes</div>
                        <div className="subtituloIngrediente">Até 8 ingredientes</div>
                    </div>

                    {/* Lista de ingredientes*/}
                    <Ingrediente ingCounter={testNumber} nTotal={nIngrendient}/>
                    <hr/>
                    <Ingrediente ingCounter={testNumber} nTotal={nIngrendient}/>
                    <hr/>
                    <Ingrediente ingCounter={testNumber} nTotal={nIngrendient}/>
                    <hr/>
                    <Ingrediente ingCounter={testNumber} nTotal={nIngrendient}/>
                    <div className="talher">
                        <div className="content-talher">Precisa de talher?</div><br/>
                        <input type="radio" id="sim" name="talher" value="sim"/>
                        <label for="sim">sim</label>
                        <input type="radio" id="nao" name="talher" value="nao" style={{right:'0%'}}/>
                        <label for="nao">não</label>
                    </div>
                </div>
                <CounterProdut/>
                <ButtonProduct/>
            </StyledBodyIngrediente>

            
    
                        
        </div>

    )
}

