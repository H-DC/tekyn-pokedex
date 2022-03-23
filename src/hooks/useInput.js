import { useState } from 'react'

export const useInput = (initValue) => {
    let [inputValue, setInputValue] = useState(initValue)

    return {
        value: inputValue,
        setValue: setInputValue,
        reset: () => setInputValue(''),
        bind: {
            value: inputValue,
            onChange: (evt) => {
                console.log(evt.target.value)
                setInputValue(evt.target.value)
            },
        },
    }
}
