import React, {  useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Container } from "../Home/styles"
import { Pokemon } from "./style"
import { NavBar } from "../../components/NavBar"

export const Pokemons = () => {
    const { id } = useParams()

    const [pokemon, setPokemon] = useState({})
    
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => {
                const pokemon = {
                    id,
                    name: data.name,
                    image: data.sprites.versions['generation-v']['black-white']['animated']['front_default'],
                    height: data.height,
                    type1: data.types[0].type.name,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    specialAttack: data.stats[3].base_stat,
                    specialDefense: data.stats[4].base_stat,
                    speed: data.stats[5].base_stat,
                }           
                setPokemon(pokemon)
            })
            .catch(err => console.log(err))  
            
    }, [id])

    return (
        <Container>
            <NavBar>
                <img id="logo" src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG-1024x1022.png" alt="Logo pokemon"/>
                <h1>PokéDex</h1>
            </NavBar>
            <Pokemon>                    
                <div className="details">                       
                    <p>{pokemon.id}</p>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <div className="info">
                        <h1>{pokemon.name}</h1>  
                        <span> Peso: {pokemon.height}kg</span>
                        <span>Tipo: {pokemon.type1}</span>
                    </div>
                    
                </div> 
                <div className="stats">
                    <span>HP: {pokemon.hp}</span>
                    <span>Attack: {pokemon.attack}</span>
                    <span>Defense: {pokemon.defense}</span>
                    <span>Speed: {pokemon.speed}</span>
                    <span>Special Attack: {pokemon.specialAttack}</span>
                    <span>Special Defense: {pokemon.specialDefense}</span>                    
                </div>       
            </Pokemon>
        </Container>
    )
}