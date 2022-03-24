import styled from '@emotion/styled'

export const TextButton = styled.button`
    padding: 0rem 2rem;
    height: 3rem;
    color: white;
    border: none;
    border-radius: 3rem;
    background-color: ${({ theme }) => theme.colors.primary || '#f4a261'};
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`
