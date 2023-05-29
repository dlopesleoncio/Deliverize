import styled from "styled-components";

export const StyledCarrinho = styled.button`
    border: none;
    background: none;
    position: absolute;
    width: 106px;
    height: 46px;
    left: 88%;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    align-items: center;
    text-align: right;
`

export const ImageCart = styled.img`
    width: 32px;
    @media (max-width:660px){
        width: 21.33px;
    }
`
export const TextCart = styled.label`
    height: 16px;
    width: 66px;

    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
    position: absolute;
    margin-left: 40px;
    color: #ED3237;
`

export const  CircleCartContainer = styled.div`
    position: absolute;
    width: 16px;
    height: 16px;
    align-self: start;
    margin-left: 24px;
    display: flex;
`
export const CircleCartContent = styled.img`
    height: 16px;
    position: absolute;
`
export const NumberCircle = styled.span`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    color: white;
    
    font-size: 12px;
    align-items: center;
`