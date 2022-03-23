import styled from '@emotion/styled'

export const DefaultLayout = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) =>
        `linear-gradient(${theme.colors.primary || '#f4a261'}, ${
            theme.colors.secondary || '#141a2b'
        })`};
`
