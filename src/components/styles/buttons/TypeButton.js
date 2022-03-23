import styled from '@emotion/styled'

export const TypeButton = styled.button`
    padding: 1rem;
    color: white;
    border: none;
    border-radius: 0.7rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    background-color: ${({ color }) => color || '#A8A87B'};
`
