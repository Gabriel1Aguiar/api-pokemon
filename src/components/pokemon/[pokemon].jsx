import React from "react"

export const Pokemon = () => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    var pokeName,
        pokemon,
        card
    
    function requestAPI(url, name){
        fetch(url + name)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    console.log(requestAPI(baseUrl, '1'))

    return <p>Test</p>
}
