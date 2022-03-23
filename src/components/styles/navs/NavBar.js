import styled from '@emotion/styled'

export const NavBar = styled.div`
    position: relative;
    width: 100%;
    height: 3rem;
    padding: 1rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

    & > .navbar__logo {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        padding: 1rem;
        top: 0;
        left: 0;
    }
`
