import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Flex } from '../../components/styles/common/Flex'
import { DefaultLayout } from '../../components/styles/layouts/DefaultLayout'
import { Card } from '../../components/styles/cards/Card'
import { NavBar } from '../../components/styles/navs/NavBar'
import { FaChevronLeft } from 'react-icons/fa'
import { get } from '../../services/api.service'
import { MAX_POKEMON_COUNT, POKEMON_API } from '../../constants/variables'
import InfoCard from './InfoCard.component'
import Avatar from './Avatar.component'
import { EMPTY_POKEMON } from '../../constants/models'
import StatsTable from './StatsTable.component'
import { AnimatedPokeball } from '../../components/styles/loadings/AnimatedPokeball'
import EvolutionPath from './EvolutionPath.component'

export const PokemonPage = () => {
    let { id } = useParams()
    const [pokemon, setPokemon] = useState(EMPTY_POKEMON)
    const [status, setStatus] = useState('loading')

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
            setStatus('loaded')
        }
    }

    let { name, id: pokemonId } = pokemon
    let capitalizedName = name[0].toUpperCase() + name.substring(1)

    return (
        <DefaultLayout>
            {status === 'loaded' ? (
                <Card transparent>
                    <NavBar>
                        <div className="navbar__logo">
                            <Link to="/">
                                <FaChevronLeft size="2rem" color="black" />
                            </Link>
                        </div>
                        <h1>
                            {capitalizedName} #{pokemonId}
                        </h1>
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
