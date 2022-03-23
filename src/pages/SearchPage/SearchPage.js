import React from 'react';
import { Card } from '../../components/styles/cards/Card';
import { DefaultLayout } from '../../components/styles/layouts/DefaultLayout';
import { FabButton } from '../../components/styles/buttons/FabButton';
import pokeballSrc from '../../assets/images/pokeball.png';

export const SearchPage = () => {
    return (
        <DefaultLayout>
            <Card transparent>
                <img src={pokeballSrc} alt="pokeball" />
                <FabButton />
            </Card>
        </DefaultLayout>
    );
};

export default SearchPage;
