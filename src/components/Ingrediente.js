//import { StyledIngrediente } from "./styles/Ingrediente.styled"

import { StyledIngrediente } from "./styles/IngredienteBody.styled"
import Counter from "./Counter"
import { useEffect, useState } from 'react';


export default function Ingrediente({id,ingCounter,nTotal}){
    
    return(
        <StyledIngrediente>
            <div className="nome-ingrediente">{id.nm_item}</div>
            
            <div className="preco">R$ {id.vl_item}</div>
            <Counter ingCounter = {ingCounter} nTotal = {nTotal}/>
        </StyledIngrediente>
    )
}