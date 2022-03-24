import styled from '@emotion/styled'

export const TypeButton = styled.button`
    padding: 1rem;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 0.7rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    margin: 0rem 0.2rem;
    background-color: ${({ theme, color }) => theme.colors[color] || '#A8A87B'};
`
