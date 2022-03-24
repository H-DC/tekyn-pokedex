import React, { useEffect, useState } from 'react'
import { POKEMON_API, SPECIES_URL } from '../../constants/variables'
import { get } from '../../services/api.service'
import { Flex } from '../../components/styles/common/Flex'

export const EvolutionPath = ({ pokemon }) => {
    let { id } = pokemon

    const [pokemonsChain, setPokemonChain] = useState([])
    let pokemonsChainDetails = []

    useEffect(() => {
        const fetchDataAsync = async () => {
            let chain = await fetchEvolutionChain(id)
            fetchChainPokemonsDetails(chain)
        }
        fetchDataAsync()
    }, [])

    const fetchEvolutionChain = async (pokemonId) => {
        if (pokemonId) {
            let specyDetails = await get(SPECIES_URL, pokemonId)
            let { chain } = await get(specyDetails.evolution_chain.url)
            return chain
        }
        return null
    }

    const fetchChainPokemonsDetails = async (pokemonObject) => {
        let pokemonDetails = await get(POKEMON_API, pokemonObject.species.name)
        let { id, species, sprites } = pokemonDetails
        pokemonsChainDetails = [
            ...pokemonsChainDetails,
            { id, name: species.name, imgSrc: sprites.front_default },
        ]
        if (pokemonObject.evolves_to?.length > 0) {
            let nextEvolution = pokemonObject.evolves_to[0].species
            if (nextEvolution) {
                fetchChainPokemonsDetails(pokemonObject.evolves_to[0])
            }
        } else {
            setPokemonChain([...pokemonsChainDetails])
        }
    }

    return (
        <Flex justify="center">
            {pokemonsChain.map((pokemon) => (
                <Flex column key={pokemon.id} margin="0 0 2rem 0">
                    <img src={pokemon.imgSrc} alt={pokemon.name} />
                    <h2>#{pokemon.id}</h2>
                    <h2>{pokemon.name}</h2>
                </Flex>
            ))}
        </Flex>
    )
}

export default EvolutionPath
