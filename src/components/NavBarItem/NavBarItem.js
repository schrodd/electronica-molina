import "./NavBarItem.css"
import { NavLink } from 'react-router-dom'

const NavBarItem = ({ children, link }) => {
    return (
        <NavLink className='nav-item' to={link}>
            <i className="fa-solid fa-angle-right"></i>
            {children}
        </NavLink>
    )
}

export default NavBarItem;