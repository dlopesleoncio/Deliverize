import { CounterDown } from "./styles/Counter.styled"
import { CounterContainer } from "./styles/Counter.styled"
import { CounterUP } from "./styles/Counter.styled"
import { StyledButton } from "./styles/Button.Styled"

import minus from "./images/minus.png"
import up from "./images/up.png"
import { useState } from "react"

function Counter({ingCounter,ingData,nTotal,valores, setValores}){

    const [value, setChangeValue] = useState(0);
    const ingId = ingData.id

    //const [valores, setValores] = useState([0,0,0,0]);

        const attIngred = (index, valor) => {  
          const novosValores = [...valores];
          novosValores[index - 1] = valor;
          setValores(novosValores);
        };    

    function newValue(){

        // Testar se o numero deste ingrediente é nulo
        if(value === 0){
            return
        }
        // Atualiza o numer do ingrediente dentro do componente
        setChangeValue(value - 1)

        // Diminui o contador do numero total de ingrediente
        ingCounter(-1);
        attIngred(ingId,value + 1)
        
    }

    function newValueUP(){
        // testar se o total de ingredientes é 8
        if(nTotal === 8){
            return
        }

        setChangeValue(value + 1)
        ingCounter(1);
        //attIngred(ingId,value)
        attIngred(ingId,value + 1)
    }
    
    return(
        <CounterContainer primary>
            {/*tag botao para evento de click*/}
            <StyledButton down primary onClick={newValue} >
                {/* estilização do botão*/}
                <CounterDown src={minus} valor={value}/> 
            </StyledButton>              
            {/*<div class="number"><div class="content"></div></div>*/}           
                <span className="counter">{value}</span>
            <StyledButton up primary onClick={newValueUP}>
                <CounterUP src={up}/>
            </StyledButton>

        </CounterContainer> 
    )
}





export default  Counter;