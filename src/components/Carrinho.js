import CarrinhoImg from './images/shopping_cart.png'
import { StyledCarrinho , ImageCart, TextCart, CircleCartContainer,CircleCartContent, NumberCircle } from './styles/Carrinho.Styled'
import Ellipse from './images/Ellipse.png'
function Carrinho(){
    return(
            <StyledCarrinho type="button">
                    <ImageCart src={CarrinhoImg} id="carrinho"/>
                    <CircleCartContainer>
                        
                        <CircleCartContent src={Ellipse} alt='Circulo'></CircleCartContent>
                        <NumberCircle>0</NumberCircle>
                    </CircleCartContainer>                    
                    <TextCart HTMLfor="carrinho" className="carrinho-text">Carrinho</TextCart>
            </StyledCarrinho>
    )

}
export default Carrinho