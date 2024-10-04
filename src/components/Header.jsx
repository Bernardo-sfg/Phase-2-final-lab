import { Link } from 'react-router-dom'

function Header() {

    return (
        <header>

            <h1>React Router</h1>

            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/new-input'>New Input</Link>

        </header>
    )

}

export default Header