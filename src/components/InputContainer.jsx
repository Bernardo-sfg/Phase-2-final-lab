import { useState, useEffect } from 'react'
import InputItem from './InputItem'
import InputForm from './InputForm'

function InputContainer() {

    const [inputs, setInputs] = useState([])

    
    useEffect(() => {
        fetch('http://localhost:3000/inputs')
        .then(res => res.json())
        .then(data => setInputs(data))
        .catch(err => console.log(err))
    }, [])

    function addInput(inputObj) {
        setInputs([...input, inputObj]) // SPREAD OPERATOR TO ADD A NEW ITEM WITHOUT MUTATING STATE
    }

    function updateInput(patchedInputObj) {
        const updatedInputs = inputs.map(input => { // THE .map ALLOWS US TO CHANGE A SINGLE ENTRY AND ALSO CREATE A NEW ARRAY
            if (input.id !== patchedInputObj.id) {
                return input
            } else {
                return patchedInputObj
            }
        })

        setInputs(updatedInputs)
    }

    function deleteInput(id) {
        const filteredInputs = inputs.filter(todo => input.id !== id) // FILTER WILL FILTER OUT AN ITEM BASED ON ID AND MAKE A NEW ARRAY
        setInputs(filteredInputs)
    }

    return (
        <div>

            <h2>Input List</h2>

            <InputForm addInput={addInput} />

            { inputs.map(todo => <InputItem key={input.id} input={input} updateInput={updateInput} deleteInput={deleteInput} />) }

        </div>
    )
}

export default InputContainer