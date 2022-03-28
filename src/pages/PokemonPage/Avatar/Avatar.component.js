import React from 'react'
import { TypeButton } from '../../../components/styles/buttons/TypeButton'
import { Flex } from '../../../components/styles/common/Flex'

export const Avatar = ({ pokemon }) => {
    let { name, sprites, types } = pokemon

    return (
        <Flex column width="30%" data-testid="avatar">
            <img src={sprites?.front_default} alt={name} height="200px" />
            <Flex justify="center" padding="1rem 0rem">
                {types.map((type) => (
                    <TypeButton color={type.type.name} key={type.slot}>
                        {type.type.name}
                    </TypeButton>
                ))}
            </Flex>
        </Flex>
    )
}

export default Avatar
