import { Container, PokeList } from "./styles";
import { useState, useEffect } from "react";
import axios from "axios"
import { PokemonCard } from "../../components/PokemonCard";
import { NavBar } from "../../components/NavBar";
import { Link } from "react-router-dom";


export const Home = () => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        getPokemons()
    }, [])
   
    const getPokemons = () => {
        var endpoints = []
        for(var i = 1; i <= 50; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        console.log(endpoints)
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))

    }
    
    return (
        <Container>        
            <NavBar>
                <img id="logo" src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG-1024x1022.png" alt="Logo pokemon"/>
                <h1>PokéDex</h1>
            </NavBar>
            <PokeList>
                {pokemons.map((pokemon, key) => (                    
                    <PokemonCard key={key}>
                        <Link to={`/pokemons/${pokemon.data.id}`} nome={pokemon.data.name}><img src={pokemon.data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']} alt={pokemon.data.name} /></Link>
                        <span>{pokemon.data.name}</span>                          
                    </PokemonCard>
                ))}                                
            </PokeList>            
        </Container>
    )
}

