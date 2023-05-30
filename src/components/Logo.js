import Logoimg from './images/logo_deliverize.png'
import logo1 from './images/Logo1.png'
import caixaLogo from './images/caixaLogo.png'

import { Logocontainer, LogoCaixa, LogoText} from  './styles/Logo.styled'
function Logo(){
    return (
      <Logocontainer>

        <LogoCaixa src={caixaLogo} className='logo-caixa' alt='Carrinho de compras'></LogoCaixa>
        <LogoText src={logo1} className='logo-letra'></LogoText>
    
      </Logocontainer>  

    )
}



export  default Logo
