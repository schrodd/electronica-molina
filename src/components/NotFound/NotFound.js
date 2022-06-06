import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    
    return (
        <div className="no-products flex-centered">
            <i class="fa-regular fa-face-frown"></i>
            <h1>¡Lo sentimos!</h1>
            <p>No hemos encontrado lo que buscabas</p>
            <Link to='/' className="go-back">Ir al inicio</Link>
        </div>
    )
}

export default NotFound