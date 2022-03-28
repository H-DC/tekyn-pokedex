import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SearchPage from './SearchPage'
import App from '../../App'

describe('Search page', () => {
    it('should display an input', () => {
        const { getAllByRole } = render(
            <App>
                <SearchPage />
            </App>
        )
        fireEvent.change(getAllByRole('textbox')[0], {
            target: { value: 'charizard' },
        })
        expect(getAllByRole('textbox')[0]).toHaveValue('charizard')
    })

    it('should display a random Btn', () => {
        const { getByTestId } = render(
            <App>
                <SearchPage />
            </App>
        )
        expect(getByTestId('random-button')).toBeEnabled()
        fireEvent.click(getByTestId('random-button'))
        expect(window.location.href).toEqual('http://localhost/pokemon')
    })

    it('should display a search Btn', () => {
        const { getAllByRole, getByTestId } = render(
            <App>
                <SearchPage />
            </App>
        )
        expect(getAllByRole('button')[0]).toHaveTextContent('Search !')
        expect(getAllByRole('button')[0]).toBeEnabled()
        fireEvent.change(getAllByRole('textbox')[0], {
            target: { value: 'charizard' },
        })
        fireEvent.click(getByTestId('random-button'))

        expect(window.location.href).toEqual(
            'http://localhost/pokemon/charizard'
        )
    })
})
