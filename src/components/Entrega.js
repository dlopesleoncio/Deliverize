import { StyledDelivery, AddressDelivery,TextDelivery } from "./styles/Entrega.Styled";

function Entrega({json}){

     
    return(
    <StyledDelivery>
        <TextDelivery> Entrega: </TextDelivery>
        < AddressDelivery> R. Antonio Braune, 222 </AddressDelivery>
    </StyledDelivery>
    )
}

export default Entrega;