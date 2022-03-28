import React, { useEffect, useState } from 'react'
import { POKEMON_API, SPECIES_URL } from '../../../constants/variables'
import { get } from '../../../services/api.service'
import { capitalized } from '../../../helpers.js/helpers'
import evoChevronSrc from '../../../assets/images/evoChevron.svg'
import { Flex } from '../../../components/styles/common/Flex'
import { NameTitle } from '../../../components/styles/titles/NameTitle'
import { AnimatedPokeball } from '../../../components/styles/loadings/AnimatedPokeball'

export const EvolutionPath = ({ pokemon }) => {
    let { id } = pokemon

    const [pokemonsChain, setPokemonChain] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

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
            if (specyDetails) {
                let { chain } = await get(specyDetails.evolution_chain.url)
                return chain
            } else {
                setIsLoaded(true)
                return null
            }
        }
        return null
    }

    const fetchChainPokemonsDetails = async (pokemonObject) => {
        if (pokemonObject) {
            let pokemonDetails = await get(
                POKEMON_API,
                pokemonObject.species.name
            )
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
                setIsLoaded(true)
                setPokemonChain([...pokemonsChainDetails])
            }
        } else {
            setIsLoaded(true)
        }
    }

    let chevronJsx = (
        <Flex>
            <img src={evoChevronSrc} alt={'chevron'} />
            <img src={evoChevronSrc} alt={'chevron'} />
        </Flex>
    )

    return (
        <Flex justify="center" data-testid="evolution-path">
            {isLoaded ? (
                pokemonsChain.map((pokemon, i) => {
                    return [
                        i !== 0 ? (
                            <div key={`chevron${pokemon.id}`}>{chevronJsx}</div>
                        ) : null,
                        <Flex column margin="0 0 2rem 0" key={pokemon.id}>
                            <img src={pokemon.imgSrc} alt={pokemon.name} />
                            <NameTitle>#{pokemon.id}</NameTitle>
                            <NameTitle>{capitalized(pokemon.name)}</NameTitle>
                        </Flex>,
                    ]
                })
            ) : (
                <AnimatedPokeball />
            )}
        </Flex>
    )
}

export default EvolutionPath
