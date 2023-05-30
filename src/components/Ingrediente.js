//import { StyledIngrediente } from "./styles/Ingrediente.styled"

import { StyledIngrediente } from "./styles/IngredienteBody.styled"
import Counter from "./Counter"


export default function Ingrediente({id,ingCounter,nTotal,valores, setValores}){
    

    return(
        <StyledIngrediente>
            <div className="nome-ingrediente">{id.nm_item}</div>
            
            <div className="preco">R$ {id.vl_item}</div>
            <Counter ingCounter = {ingCounter} ingData = {id} nTotal={nTotal} valores={valores} setValores={setValores}/>
        </StyledIngrediente>
    )
}