import styled, { css } from 'styled-components';

export const CounterDown=styled.img`
    height: 2px;
    width: 14px;

    filter: ${props => props.valor === 0 ? 'grayscale(1)' : 'grayscale(0)'};
    filter: ${props => props.valor === 0 ? 'brightness(0.1)': 'brightness(1)'};   
    opacity: ${props => props.valor === 0 ? '0.2': '1'};



`
export const CounterContainer=styled.div`
    //left:30%;
    
    align-items: center;
    
    ${props=>props.primary &&
        css`
            position: absolute;
            display: flex;
            width: 89px;
            //left: 262px;
            right: 0%;
            margin-right:8px;
            top: 27px;
            //left:19.1800878477306vw
            //top: 27px;
            height: 32px;
        `
    }
    ${props=>props.secundary &&
        css`
            display: inline-flex;
            width: 10.395314787701318vw;
            margin-right:8px;

            position: relative;
            height: 40px;

            //width: 140px;
            @media (max-width:600px) {
                width: 140px;
            }
        `
    }

    
    border-radius: 5px;
    border: 1px solid #F09035;
       
`

export const CounterUP=styled.img`

    height: 14px;
    width: 14px;
    position:absolute;
    left: auto;

    filter: ${props => props.nTotal === 8 ? 'grayscale(1)' : 'grayscale(0)'};
    filter: ${props => props.nTotal === 8 ? 'brightness(0.1)': 'brightness(1)'};   
    opacity: ${props => props.nTotal === 8 ? '0.2': '1'};

`