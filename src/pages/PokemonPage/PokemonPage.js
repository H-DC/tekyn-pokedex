import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MAX_POKEMON_COUNT, POKEMON_API } from '../../constants/variables'
import { EMPTY_POKEMON } from '../../constants/models'
import { capitalized } from '../../helpers.js/helpers'
import { get } from '../../services/api.service'
import { Flex } from '../../components/styles/common/Flex'
import { DefaultLayout } from '../../components/styles/layouts/DefaultLayout'
import { Card } from '../../components/styles/cards/Card'
import { NavBar } from '../../components/styles/navs/NavBar'
import { AnimatedPokeball } from '../../components/styles/loadings/AnimatedPokeball'
import { NameTitle } from '../../components/styles/titles/NameTitle'
import { FaChevronLeft } from 'react-icons/fa'
import InfoCard from './InfoCard/InfoCard.component'
import Avatar from './Avatar/Avatar.component'
import StatsTable from './StatsTable/StatsTable.component'
import EvolutionPath from './EvolutionPath/EvolutionPath.component'

export const PokemonPage = () => {
    let { id } = useParams()
    const [pokemon, setPokemon] = useState(EMPTY_POKEMON)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        let pokemon = null
        if (id) {
            pokemon = await get(POKEMON_API, id)
        } else {
            let allPokemons = await get(
                POKEMON_API,
                `?limit=${MAX_POKEMON_COUNT}`
            )
            let { results: pokemons } = allPokemons
            let randomNum = Math.floor(Math.random() * MAX_POKEMON_COUNT)
            pokemon = await get(POKEMON_API, pokemons[randomNum].name)
        }
        if (pokemon) {
            setPokemon(pokemon)
            setIsLoaded(true)
        }
    }

    let { name, id: pokemonId } = pokemon

    return (
        <DefaultLayout>
            {isLoaded === true ? (
                <Card transparent>
                    <NavBar>
                        <div className="navbar__action">
                            <Link to="/">
                                <FaChevronLeft
                                    size="2rem"
                                    color="black"
                                    data-testid="back-button"
                                />
                            </Link>
                        </div>
                        <NameTitle>
                            {capitalized(name)} #{pokemonId}
                        </NameTitle>
                    </NavBar>
                    <Flex justify="space-between" padding="2rem">
                        <StatsTable pokemon={pokemon} />
                        <Avatar pokemon={pokemon} />
                        <InfoCard pokemon={pokemon} />
                    </Flex>
                    <EvolutionPath pokemon={pokemon} />
                </Card>
            ) : (
                <AnimatedPokeball />
            )}
        </DefaultLayout>
    )
}
export default PokemonPage
