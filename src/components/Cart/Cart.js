import './Cart.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext/CartContext'
import CartItem from '../CartItem/CartItem'
import presetText from '../presetText'
import priceFormatter from '../priceFormatter'

const Cart = () => {
    const {cart, removeItem, clearCart} = useContext(CartContext)
    const cartTotalValue = (cart) => cart.reduce((a,e) => a + e.prod.price*e.qty, 0)

    return (
        <div className='flex-centered'>
            <div className='cart'>
                <h1 className='cart-h1'>Carrito de compras</h1>
                {cart.length > 0 && <button className='cart-list cart-clear' onClick={() => clearCart()}>{presetText.clearCart}</button>}
                {cart.length > 0
                ? cart.map(e => <CartItem item={e} key={e.prod.id} remove={removeItem}/>)
                : <>
                    <h3 className='cart-empty'> No hay productos</h3>
                    <div className='flex-centered'>
                        <Link to='/' className="cart-go-back">{presetText.goHome}</Link>
                    </div>
                </>
                /* Reemplazar h2 por componente de carrito vacío similar al NotFound */}
                {cart.length > 0 && <p className='cart-total'>Total: {priceFormatter(cartTotalValue(cart))}</p>}
                
            </div>
        </div>
    )
}

export default Cart