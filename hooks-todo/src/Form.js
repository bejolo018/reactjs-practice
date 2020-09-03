import React, { useState } from 'react'

//Custom hook
const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    return{
        value,
        onChange: (e) => setValue(e.target.value),
        resetValue: () => setValue("")
    }
}

function Form({onSubmit}) {
    const {resetValue, ...text} = useInputValue("")

    return (
        <form onSubmit={e => {
            e.preventDefault()
            onSubmit(text.value)
            resetValue()
        }}>
            <input {...text} />
        </form>
    )
}

export default Form