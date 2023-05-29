import React, { useState } from "react";

function ButtonProduct(){ 

    const [escondido, setEscondido] = useState(true);
    const alternarVisibilidade = () => {
        setEscondido(!escondido);
      };

    return(
        <div>
            {escondido ? null : 
            
                <div id="popover" className="popover">Produto adicionad</div>
            }
            
            <button className="addButtonContainer" id="btn-add"  onClick={alternarVisibilidade}>
                <div className="addButtonContent">Adicionar</div>
            </button>
        </div>
        
    );
}

export default ButtonProduct;