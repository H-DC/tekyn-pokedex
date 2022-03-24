import React from 'react'
import { Flex } from '../../components/styles/common/Flex'
import { Card } from '../../components/styles/cards/Card'

export const InfoCard = ({ pokemon }) => {
    let { weight, height, abilities } = pokemon

    let formatedAbilities = abilities.map((e, i) => {
        return i === 0 ? e.ability.name : ', ' + e.ability.name
    })

    return (
        <Card bordered elevated width="30%" padding="1rem">
            <Flex justify="space-between" margin="1rem">
                <strong>Weight</strong>
                <span className="text--info">{weight} kg</span>
            </Flex>
            <Flex justify="space-between" margin="1rem">
                <strong>Height</strong>
                <span className="text--info">{height} m</span>
            </Flex>
            <Flex justify="space-between" margin="1rem">
                <strong>Abilities</strong>
                <span className="text--info">{formatedAbilities}</span>
            </Flex>
        </Card>
    )
}

export default InfoCard
