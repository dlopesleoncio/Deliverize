import AccountEntrar from './images/account_circle.png'
import { StyledEntrar } from './styles/Entrar.styled';
function EntrarIcon(){
    return(
        <StyledEntrar>
            <form>
                <input type="image" src={AccountEntrar} alt="ícone de login" id="login"/>
                <label for="login" class="login">Entrar</label>
            </form>       
        </StyledEntrar>
    );
}
export default EntrarIcon;