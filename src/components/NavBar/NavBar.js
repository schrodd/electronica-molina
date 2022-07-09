import NavBarItem from '../NavBarItem/NavBarItem'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../resources/logobn.svg'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className={"navBar"}>
            <Link to='/' className="logo">
                <img src={logo} alt={"logo"}/>
            </Link>
            <div className='space'> </div>
            <NavBarItem link={"/category/parlantes"}>parlantes</NavBarItem>
            <NavBarItem link={"/category/auriculares"}>auriculares</NavBarItem>
            <NavBarItem link={"/category/notebooks"}>notebooks</NavBarItem>
            <NavBarItem link={"/category/tablets"}>tablets</NavBarItem>
            <NavBarItem link={"/category/wearables"}>wearables</NavBarItem>
            <CartWidget/>
        </div>
    )
}

export default NavBar;