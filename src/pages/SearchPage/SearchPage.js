import React from 'react'
import { Flex } from '../../components/styles/common/Flex'
import { DefaultLayout } from '../../components/styles/layouts/DefaultLayout'
import { Card } from '../../components/styles/cards/Card'
import { FabButton } from '../../components/styles/buttons/FabButton'
import { TextButton } from '../../components/styles/buttons/TextButton'
import { SearchForm } from '../../components/styles/forms/SearchForm'
import { FaRandom } from 'react-icons/fa'
import pokeballSrc from '../../assets/images/pokeball.png'
import { Link } from 'react-router-dom'
import { useInput } from '../../hooks/useInput'

export const SearchPage = () => {
    let { bind: searchInput } = useInput('')

    return (
        <DefaultLayout>
            <Card transparent padding="2rem">
                <img src={pokeballSrc} alt="pokeball" />
                <SearchForm>
                    <h6>Pokemon name or ID</h6>
                    <input {...searchInput} />
                </SearchForm>
                <Flex justify="space-between">
                    <Link to={`/pokemon/${searchInput.value}`}>
                        <TextButton>Search !</TextButton>
                    </Link>
                    <Link to="/pokemon">
                        <FabButton margin="0 0 0 1rem">
                            <FaRandom />
                        </FabButton>
                    </Link>
                </Flex>
            </Card>
        </DefaultLayout>
    )
}

export default SearchPage
