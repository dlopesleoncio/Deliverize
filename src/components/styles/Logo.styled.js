import styled from "styled-components"

export const Logocontainer = styled.div`
    position:absolute;
    overflow: hidden;
    height: 48px;

    width: 16.8585%;
    left: 40px;
    top: 16px;
    display:flex;
    @media (max-width:660px){
        width:150.15px;
        height: 32px;

    }
`
export const LogoCaixa = styled.img`
    width: 82.88px;
    position: absolute;
    margin-right: 20px;
    @media (max-width:660px){
        width:55.26px
    }
`

export const LogoText = styled.img`
    width: 10.948023426061495vw;
    position: absolute;
    bottom:0%;
    left:32%;
    padding: 2px;
    @media (max-width:660px){
        width:99.7px
    }
`