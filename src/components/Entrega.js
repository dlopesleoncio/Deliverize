import { StyledDelivery, AddressDelivery,TextDelivery } from "./styles/Entrega.Styled";

function Entrega(){
    return(
    <StyledDelivery>
        <AddressDelivery> Entrega: </AddressDelivery>
        <TextDelivery> Endereço da API </TextDelivery>
    </StyledDelivery>
    )
}

export default Entrega;