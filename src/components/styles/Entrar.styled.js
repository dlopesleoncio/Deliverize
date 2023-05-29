import styled from 'styled-components'

export const StyledEntrar = styled.div`
    position: relative;
    left: 78%;
    display: flex;
    align-items: center;
    //top:26.67px;
    //bottom: 26.67;
    width:88px;
    height: 32px;
    > input{
        @media (max-width: 660px){
            width: 21.33px;
        }
    }

`
export const LoginImage = styled.label`
    height: 16px;
    position: relative;
    font-family: Roboto;
    color:#ED3237;
    cursor: pointer;
    font-size: 16px;
    @media (max-width: 660px){
        height: 10.66px;
        font-size: 10.66px;
    }
`
