import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent, render } from '@testing-library/react'
import { theme } from '../../App'
import PokemonPage from './PokemonPage'
import { ThemeProvider } from '@emotion/react'

describe('Pokemon page', () => {
    it('should display a back btn', async () => {
        const { findByTestId } = render(
            <ThemeProvider theme={theme}>
                <Router>
                    <PokemonPage />
                </Router>
            </ThemeProvider>
        )
        fireEvent.click(await findByTestId('back-button'))
        expect(window.location.href).toEqual(`${process.env.BASE_URL}`)
    })

    it('should display a stat table, pokemon img, info card and evolution path', async () => {
        const { findByTestId } = render(
            <ThemeProvider theme={theme}>
                <Router>
                    <PokemonPage />
                </Router>
            </ThemeProvider>
        )
        expect(await findByTestId('stat-table')).toBeInTheDocument()
        expect(await findByTestId('avatar')).toBeInTheDocument()
        expect(await findByTestId('info-card')).toBeInTheDocument()
        expect(await findByTestId('evolution-path')).toBeInTheDocument()
    })
})
