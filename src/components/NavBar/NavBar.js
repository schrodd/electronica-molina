import NavBarItem from '../NavBarItem/NavBarItem'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../resources/logobn.svg'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navBar">
            <Link to='/' className="logo">
                <img src={logo} alt="logo"/>
            </Link>
            <div className='space'> </div>
            <NavBarItem link="/category/parlantes">Parlantes</NavBarItem>
            <NavBarItem link="/category/auriculares">Auriculares</NavBarItem>
            <NavBarItem link="/category/notebooks">Notebooks</NavBarItem>
            <NavBarItem link="/category/tablets">Tablets</NavBarItem>
            <NavBarItem link="/category/wearables">Wearables</NavBarItem>
            <CartWidget/>
        </div>
    )
}

export default NavBar;