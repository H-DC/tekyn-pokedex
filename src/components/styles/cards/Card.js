import styled from '@emotion/styled'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 2rem;
    min-width: ${({ minWidth }) => minWidth};
    background-color: ${({ transparent }) =>
        transparent ? 'rgba(255, 255, 255, 0.8)' : '#fff'};
    border: ${({ bordered }) => (bordered ? '1px solid #DEDEDE' : 'none')};
    box-shadow: ${({ elevated }) =>
        elevated ? '0px 2px 5px rgba(0, 0, 0, 0.2)' : 'none'};
`
