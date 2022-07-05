import './Cart.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext/CartContext'
import CartItem from '../CartItem/CartItem'
import presetText from '../../helpers/presetText'
import priceFormatter from '../../helpers/priceFormatter'
import NotFound from '../NotFound/NotFound'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, removeItem, clearCart} = useContext(CartContext)
    const cartTotalValue = (cart) => cart.reduce((a,e) => a + e.prod.price*e.qty, 0)

    return (
        <div className='flex-centered'>
            <div className='cart'>
                <h1 className='cart-h1'>{presetText.cartTitle}</h1>
                {cart.length > 0 && <button className='cart-list cart-clear' onClick={() => clearCart()}>{presetText.clearCart}</button>}
                {cart.length > 0
                ? cart.map(e => <CartItem item={e} key={e.prod.id} remove={removeItem}/>)
                : <NotFound message={presetText.emptyCart}/> }
                {cart.length > 0 && 
                    <div className='cart-total-section'>
                        <p className='cart-total'>Total: {priceFormatter(cartTotalValue(cart))}</p>
                        <Link class='btn1' to='/cart-form'>{presetText.finishPurchase}</Link>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Cart