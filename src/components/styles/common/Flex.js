import styled from '@emotion/styled'

export const Flex = styled.div`
    width: ${({ width }) => width || '100%'};
    display: flex;
    flex-direction: ${({ column }) => column && 'column'};
    align-items: center;
    justify-content: ${({ justify }) => justify};
    padding: ${({ padding }) => padding};
    margin: ${({ margin }) => margin};
    background-color: ${({ backgroundColor }) => backgroundColor};
`
