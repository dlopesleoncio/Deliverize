import styled, {css} from 'styled-components'

export const StyledButton = styled.button`
    display: inline-flex;
    border: none;
    justify-content: center;
    background: none;
    cursor:pointer;
    align-items: center;
    width: 24px;
    height: 24px;

    position: absolute;
    ${
        props=>props.down && props.primary &&
        css`margin-left: 4px;`
        }
    


    ${
        props=> props.up && props.primary &&
    css`
        right: 0%;
        margin-right:4px;
        //margin-top: 4px;
    `
    }

    ${
        props=> props.down && props.secundary &&
        css`//margin-top:8px;
            margin-left:8px;    
        `
    }


${
        props=> props.up && props.secundary &&
    css`
        right: 0%;
        margin-right:8px;
        //margin-top: 8px;
    `
    }



`