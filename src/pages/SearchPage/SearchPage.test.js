import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import SearchPage from './SearchPage'
import { theme } from '../../App'
import { ThemeProvider } from '@emotion/react'

describe('Search page', () => {
    it('should display an input', () => {
        const { getAllByRole } = render(
            <ThemeProvider theme={theme}>
                <Router>
                    <SearchPage />
                </Router>
            </ThemeProvider>
        )
        fireEvent.change(getAllByRole('textbox')[0], {
            target: { value: 'charizard' },
        })
        expect(getAllByRole('textbox')[0]).toHaveValue('charizard')
    })

    it('should display a random Btn', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Router>
                    <SearchPage />
                </Router>
            </ThemeProvider>
        )
        expect(getByTestId('random-button')).toBeEnabled()
        fireEvent.click(getByTestId('random-button'))
        expect(window.location.href).toEqual(`${process.env.BASE_URL}pokemon`)
    })

    it('should display a search Btn', () => {
        const { getAllByRole, getByText } = render(
            <ThemeProvider theme={theme}>
                <Router>
                    <SearchPage />
                </Router>
            </ThemeProvider>
        )
        expect(getAllByRole('button')[0]).toHaveTextContent('Search !')
        expect(getAllByRole('button')[0]).toBeEnabled()
        fireEvent.change(getAllByRole('textbox')[0], {
            target: { value: 'charizard' },
        })
        fireEvent.click(getByText('Search !'))

        expect(window.location.href).toEqual(
            `${process.env.BASE_URL}pokemon/charizard`
        )
    })
})
