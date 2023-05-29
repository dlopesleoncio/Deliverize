import { StyledDelivery, AddressDelivery,TextDelivery } from "./styles/Entrega.Styled";

function Entrega(){
    return(
    <StyledDelivery>
        <TextDelivery> Entrega: </TextDelivery>
        < AddressDelivery> Endereço da API </AddressDelivery>
    </StyledDelivery>
    )
}

export default Entrega;