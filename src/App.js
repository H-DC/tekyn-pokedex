import { Global, ThemeProvider } from '@emotion/react'
import RouterProvider from './providers/router/router.provider'

const theme = {
    colors: {
        primary: '#f4a261',
        secondary: '#141a2b',
        info: '#E76F51',
        active: '#38A8D5',

        normal: '#a8a87b',
        fire: '#ee803b',
        water: '#6a92ed',
        grass: '#7bc757',
        electric: '#f7cf43',
        ice: '#9ad8d8',
        fighting: '#be322e',
        poison: '#9b4a99',
        ground: '#dfbf6e',
        flying: '#a893ed',
        psychic: '#ec5b89',
        bug: '#a8b732',
        rock: '#b89f41',
        ghost: '#705a97',
        dark: '#705849',
        dragon: '#7043f4',
        steel: '#b8b9cf',
        fairy: '#efb7bd',
    },
}

const globalStyles = {
    body: {
        margin: 0,
        fontFamily:
            "'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    },
    '*': {
        boxSizing: 'border-box',
    },
}

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={globalStyles} />
            <RouterProvider />
        </ThemeProvider>
    )
}

export default App
