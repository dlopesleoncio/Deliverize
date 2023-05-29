import CarrinhoImg from './images/shopping_cart.png'
import { StyledCarrinho } from './styles/Carrinho.Styled'
import Ellipse from './images/Ellipse.png'
function Carrinho(){
    return(
            <StyledCarrinho type="button">
                    <img src={CarrinhoImg} id="carrinho" className="carrinho-image"/>
                    <div className='circuloSacolaContainer'>
                        
                        <img src={Ellipse} alt='Circulo' className="circuloSacola"></img>
                        <span className="numberCircle">1</span>
                    </div>                    
                    <label HTMLfor="carrinho" className="carrinho-text">Carrinho</label>
            </StyledCarrinho>
    )

}

export default Carrinho