import React from 'react'
import { Flex } from '../../components/styles/common/Flex'
import { DefaultLayout } from '../../components/styles/layouts/DefaultLayout'
import { Card } from '../../components/styles/cards/Card'
import { FabButton } from '../../components/styles/buttons/FabButton'
import { TextButton } from '../../components/styles/buttons/TextButton'
import { SearchForm } from '../../components/styles/forms/SearchForm'
import { FaRandom } from 'react-icons/fa'
import pokeballSrc from '../../assets/images/pokeball.png'

export const SearchPage = () => {
    return (
        <DefaultLayout>
            <Card transparent minWidth="11rem">
                <img src={pokeballSrc} alt="pokeball" />
                <SearchForm>
                    <h6>Pokemon name or ID</h6>
                    <input />
                </SearchForm>
                <Flex justify="space-between">
                    <TextButton>Search !</TextButton>
                    <FabButton>
                        <FaRandom />
                    </FabButton>
                </Flex>
            </Card>
        </DefaultLayout>
    )
}

export default SearchPage
