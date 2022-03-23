import styled from '@emotion/styled'

export const FabButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    color: white;
    border: none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary || '#f4a261'};
`
