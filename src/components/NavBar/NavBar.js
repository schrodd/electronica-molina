import NavBarItem from '../NavBarItem/NavBarItem'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../resources/logobn.svg'
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className={"navBar"}>
            <a className={"logo"} href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"} target={"_blank"} rel={"noreferrer"}>
                <img src={logo} alt={"logo"}/>
            </a>
            <div className={'space'}> </div>
            <NavBarItem link={"#"}>Parlantes</NavBarItem>
            <NavBarItem link={"#"}>Auriculares</NavBarItem>
            <NavBarItem link={"#"}>Notebooks</NavBarItem>
            <NavBarItem link={"#"}>Tablets</NavBarItem>
            <CartWidget/>
        </div>
    )
}

export default NavBar;