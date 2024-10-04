function InputItem({ input, updateInput, deleteInput }) {

    // PATCH REQUEST
    function handleLike() {
        fetch(`http://localhost:3000/inputs${input.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ likes: input.likes + 1 })
        })
        .then(res => res.json())
        .then(data => updateInput(data))
    }

    // DELETE REQUEST
    function handleDelete() {
        fetch(`http://localhost:3000/inputs${input.id}`, {
            method: 'DELETE' // DONT NEED ANYTHING OTHER THAN THE METHOD
        })
        .then(res => res.json())
        .then(() => deleteInput(input.id))
    }

    return (
        <div className="input-item">
            <p>{todo.name}</p>
            <button onClick={handleLike}>Likes: {input.likes}</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )

}

export default InputItem