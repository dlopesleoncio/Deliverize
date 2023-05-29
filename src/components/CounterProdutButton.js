import { CounterDown } from "./styles/Counter.styled"
import { CounterContainer } from "./styles/Counter.styled"
import { CounterUP } from "./styles/Counter.styled"
import { StyledButton } from "./styles/Button.Styled"

import minus from "./images/minus.png"
import up from "./images/up.png"
import { useState } from "react"


function CounterProdut(){

    const [value, setChangeValue] = useState(0);
    function newValue(){
        if(value == 0){
            return
        }
        setChangeValue(value - 1)
    }

    function newValueUP(){
        setChangeValue(value + 1)
    }

    return(
        <CounterContainer secundary>
            {/*tag botao para evento de click*/}
            <StyledButton down secundary onClick={newValue}>
                {/* estilização do botão*/}
                <CounterDown src={minus} valor={value}/> 
            </StyledButton>              
                        
            <span className="counter">{value}</span>
            {/*<StyledButton onClick={newValueUP}>
                <CounterUP src={up}/>
            </StyledButton>
    */}
            <StyledButton up secundary onClick={newValueUP}>    
                <CounterUP secundary src={up}/>
            </StyledButton>  
        </CounterContainer> 
    )
}

export default CounterProdut;