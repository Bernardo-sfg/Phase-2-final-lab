import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function InputShowPage() {

    const params = useParams()

    const [input, setInput] = useState({})
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/inputs/${params.id}`)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                setErrors('NOT FOUND')
            }
        })
        .then(data => setInput(data))
    }, [])

    if (errors) {
        return (
            <>
            <h2>{errors}</h2>
            <Link to='/'>go back home...</Link>
            </>
        )
        }

    return (
        <div>
            <h2>{input.name}</h2>
            <h3>Likes: {input.likes}</h3>
        </div>
    )

}

export default InputShowPage