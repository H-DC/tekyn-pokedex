import { POKEMON_API } from '../constants/variables'

export const get = async (query) => {
    try {
        let response = await fetch(`${POKEMON_API}/${query}`)
        return response.json()
    } catch (error) {
        console.log('Error', error)
    }
}
