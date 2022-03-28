import styled from '@emotion/styled'

export const NavBar = styled.div`
    position: relative;
    width: 100%;
    padding: 1rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

    & > .navbar__action {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        top: 0;
        left: 0;
    }
`
