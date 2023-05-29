import AccountEntrar from './images/account_circle.png'
import { StyledEntrar, LoginImage } from './styles/Entrar.styled';
function EntrarIcon(){
    return(
        <StyledEntrar>
            
                <input type="image" src={AccountEntrar} alt="ícone de login" id="login"/>
                <LoginImage for="login" class="login">Entrar</LoginImage>
                 
        </StyledEntrar>
    );
}
export default EntrarIcon;