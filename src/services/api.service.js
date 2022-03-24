export const get = async (URL, id = '') => {
    try {
        let response = await fetch(`${URL}${id}`)
        if (response.status === 200) {
            return await response.json()
        } else {
            return null
        }
    } catch (error) {
        console.log('Error', error)
    }
}
