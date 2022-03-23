import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Flex } from '../../components/styles/common/Flex'
import { DefaultLayout } from '../../components/styles/layouts/DefaultLayout'
import { Card } from '../../components/styles/cards/Card'
import { NavBar } from '../../components/styles/navs/NavBar'
import { FaChevronLeft } from 'react-icons/fa'
import { get } from '../../services/api.service'
import { MAX_POKEMON_COUNT } from '../../constants/variables'

export const PokemonPage = () => {
    let { id } = useParams()
    const [pokemon, setPokemon] = useState({ name: ' ', types: [] })

    useEffect(() => {
        const fetchPokemon = async () => {
            if (id === 'random') {
                let { results: pokemons } = await get(
                    `?limit=${MAX_POKEMON_COUNT}`
                )
                let randomNum = Math.floor(Math.random() * MAX_POKEMON_COUNT)
                let pokemon = await get(pokemons[randomNum].name)
                setPokemon(pokemon)
            } else if (id) {
                let pokemon = await get(id)
                setPokemon(pokemon)
            }
        }
        fetchPokemon()
    }, [])

    let CapitalizedName =
        pokemon.name[0].toUpperCase() + pokemon.name.substring(1)

    return (
        <DefaultLayout>
            <Card transparent minWidth="90vw">
                <NavBar>
                    <div className="navbar__logo">
                        <Link to="/">
                            <FaChevronLeft size="2rem" />
                        </Link>
                    </div>
                    <h1>{CapitalizedName} #006</h1>
                </NavBar>
                <Flex justify="space-between">Todo Layout</Flex>
            </Card>
        </DefaultLayout>
    )
}

export default PokemonPage
