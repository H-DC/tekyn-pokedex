import styled from '@emotion/styled'

export const StatTable = styled.table`
    width: 30%;
    table-layout: fixed;
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 0.5rem;

    & th,
    td {
        height: 0.6rem;
    }
`
