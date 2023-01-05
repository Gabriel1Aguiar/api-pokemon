import styled from "styled-components";

export const Pokemon = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;

    img {
        max-width: 100%;
        width: 9em;
        height: 9em;
        margin-right: 5em;
    }

    .details p{
        font-weight: bold;
    }

    .info {
        display: flex;
        flex-direction: column;
        padding-top: 2.5rem;
    }

    .stats{
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }


`
