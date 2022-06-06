import "./NavBarItem.css"
import { Link } from 'react-router-dom'

const NavBarItem = ({children, link}) => {
    return (
        <Link className='nav-item' to={link}>
            <i className="fa-solid fa-angle-right"></i>
            {children}
        </Link>
    )
}

export default NavBarItem;