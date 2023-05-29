import { useState, useEffect } from "react"
import { StyledBodyIngrediente } from './styles/IngredienteBody.styled'
import Ingrediente from './Ingrediente'
import Counter from "./Counter"
import CounterProdut from './CounterProdutButton'
import Alimento from './images/alimento.png'
import ButtonProduct from "./ButtonProduct"
export default function BodyComponent({json}){


    //Chamando dados da API


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



        const data = json[0]
        const dataIngredients = data.ingredients[0]
        const itensIgredients = dataIngredients.itens
    
        //const imageProduct = data.url_image // -- URL dando erro
    return (

        <div className="cBody">

            <div className='countainer-produto'>  
                <div className='imagem-produto'>
                    <img src={Alimento} style={{width:'100%'}}></img>
                </div>
                <div className='nome-produto'>{data.nm_product}</div>
                <div className='descricao-produto'>{data.description}</div>
                <div className='produto-preco'>R$ {data.vl_price}</div>
                <div className='preco-desconto'>R$ {data.vl_discount}</div>
            </div>

            <StyledBodyIngrediente>
                <div className="container-ingrediente">
                    <div className="header-ingredientes">
                        <div className="tituloIngrediente"> Adicionar ingredientes</div>
                        <div className="subtituloIngrediente">Até {dataIngredients.max_itens} ingredientes</div>
                    </div>

                    {/* Lista de ingredientes*/}
                    <Ingrediente id={itensIgredients[0]} ingCounter={testNumber} nTotal={nIngrendient}/>
                    <hr/>
                    <Ingrediente id={itensIgredients[1]} ingCounter={testNumber} nTotal={nIngrendient}/>
                    <hr/>
                    <Ingrediente id={itensIgredients[2]} ingCounter={testNumber} nTotal={nIngrendient}/>
                    <hr/>
                    <Ingrediente id={itensIgredients[3]} ingCounter={testNumber} nTotal={nIngrendient}/>
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

