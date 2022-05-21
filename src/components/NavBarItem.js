const NavBarItem = ({children, link}) => {
    return (
        <a className={'item'} href={link}>
            <i className={"fa-solid fa-angle-right"}></i>
            {children}
        </a>
    )
}

export default NavBarItem;