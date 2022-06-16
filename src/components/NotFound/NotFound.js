import { Link } from 'react-router-dom'
import './NotFound.css'
import '../presetText'
import presetText from '../presetText'

const NotFound = () => {
    return (
        <div className="no-products flex-centered">
            <i class="fa-regular fa-face-frown"></i>
            <h1>{presetText.notFoundTitle}</h1>
            <p>{presetText.notFoundDesc}</p>
            <Link to='/' className="go-back">{presetText.goHome}</Link>
        </div>
    )
}

export default NotFound