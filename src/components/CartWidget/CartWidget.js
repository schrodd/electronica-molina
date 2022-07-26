import "./CartWidget.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../../context/CartContext/CartContext"

const CartWidget = () => {
    const {cart} = useContext(CartContext)
    const amountInCart = (cart) => cart.reduce((a,e) => a += e.qty, 0)
    return (
        <Link to={'/cart'} className='flex-centered'>
            {cart.length > 0 && <p className='cart-widget-amount'>{amountInCart(cart)}</p>}
            <i className={"fa-solid fa-cart-shopping cart-widget"}></i>
        </Link>
    )
}

export default CartWidget;