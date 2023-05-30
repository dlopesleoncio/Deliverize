import React, { useState } from "react";

function ButtonProduct({ data, itensIgredients, valores}){ 

    const [escondido, setEscondido] = useState(true);
    const alternarVisibilidade = () => {
        setEscondido(!escondido);
      };

    return(
        <div>
            {escondido ? null : 
            
                <div id="popover" className="popover">
                    <div id="headder">Adicionado com Sucesso</div>
                    <br/>
                    <div className='header-popover'>
                            {data.nm_product}</div>
                    <div class="body-pop">
                        <div>Ingredientes:</div>
                    <ul>
                        <li>{valores[0]} - {itensIgredients[0].nm_item}</li>
                        <li>{valores[1]} - {itensIgredients[1].nm_item}</li>
                        <li>{valores[2]} - {itensIgredients[2].nm_item}</li>
                        <li>{valores[3]} - {itensIgredients[3].nm_item}</li>

                    </ul>
                    </div>

                        

                </div> 
                
            }
            
            <button className="addButtonContainer" id="btn-add"  onClick={alternarVisibilidade}>
                <div className="addButtonContent">Adicionar</div>
            </button>
        </div>
        
    );
}

export default ButtonProduct;