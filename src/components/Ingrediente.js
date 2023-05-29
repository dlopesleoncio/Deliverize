import { StyledIngrediente } from "./styles/Ingrediente.styled"
import Counter from "./Counter"



export default function Ingrediente({ingCounter,nTotal}){
    //const f = props.ing;
    return(
        <StyledIngrediente>
            <div className="nome-ingrediente">Ingrediente 1</div>
            
            <div className="preco">
                preço</div>
            <Counter ingCounter = {ingCounter} nTotal = {nTotal}/>
            
        </StyledIngrediente>
    )
}