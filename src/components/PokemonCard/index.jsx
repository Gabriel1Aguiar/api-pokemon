import styled from "styled-components"

export const PokemonCard = styled.li `
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-style: solid;
    border-color: #D3D3D3;
    border-width: 1px;
    box-shadow: 0 7px 8px 0 rgba(0,0,0,0.2);
    border-radius: 18px;
    
    img {
        width: 8rem;
        margin-bottom: 1.5rem;
    }

    span {
        font-weight: bold;
    }

    :hover {
        transform: scale(1.1);
        transition: transform 0.4s;
        box-shadow: 0 14px 16px 0 rgba(0,0,0,0.2);
    }

`