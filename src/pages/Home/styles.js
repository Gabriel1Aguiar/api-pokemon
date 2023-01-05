import styled from 'styled-components'

export const Container = styled.div `
    div {
        display: flex;
    }
`

export const PokeList = styled.ul `
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;   
    padding: 70px 100px;
`
