import { Link } from 'react-router-dom'
import './NotFound.css'
import presetText from '../../helpers/presetText'

const NotFound = ({message = presetText.notFoundDesc}) => {
    return (
        <div className="no-products flex-centered">
            <i className="fa-regular fa-face-frown"></i>
            <h1>{presetText.notFoundTitle}</h1>
            <p>{message}</p>
            <Link to='/' className="go-back btn1">{presetText.goHome}</Link>
        </div>
    )
}

export default NotFound