import React from 'react'
import { StatTable } from '../../../components/styles/tables/StatTable'
import { StatTd } from '../../../components/styles/tables/StatTd'

export const StatsTable = ({ pokemon }) => {
    let { stats } = pokemon

    let tableRows = new Array(16).fill(' ')

    let statTableJSX = tableRows.map((e, rowIndex) => (
        <tr key={rowIndex}>
            {stats.map((stat, i) =>
                rowIndex !== tableRows.length - 1 ? (
                    <StatTd
                        key={i + rowIndex}
                        color={
                            stat.base_stat > rowIndex * 10 ? 'white' : '#38A8D5'
                        }>
                        {' '}
                    </StatTd>
                ) : (
                    <th key={i + rowIndex}>{stat.stat.name}</th>
                )
            )}
        </tr>
    ))

    return (
        <StatTable backgroundColor="#C4C4C4" data-testid="stat-table">
            <tbody>{statTableJSX}</tbody>
        </StatTable>
    )
}

export default StatsTable
