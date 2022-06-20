import "./ItemDetail.css"
import priceFormatter from '../priceFormatter'
import presetText from '../presetText' // Decidí no desestructurar por ahora los textos predefinidos
import Counter from '../Counter/Counter'
import {Link} from 'react-router-dom'
import {useState, useContext} from 'react'
import CartContext from '../../context/CartContext/CartContext'

const ItemDetail = ({prod}) => { // Decidí no desestructurar por ahora las propiedades del objeto

    const cartContext = useContext(CartContext)
    const [count, setCount] = useState(0)

    function addCount(){
        setCount(count + 1)
    } 
    function subtractCount(){
        count > 0 && setCount(count - 1)
    }

    return (
        <div className="flex-centered">
            <div className="item-detail">
                <img src={prod.img} alt={prod.title}/>
                <div className="item-detail-text">
                    <p className="item-detail-cat">{presetText.itemDetailCategory}<b>{prod.category}</b></p>
                    <p className="item-id">{prod.id}</p>
                    <h1 className="item-detail-title">{prod.title}</h1>
                    {prod.price !== undefined && <p className="item-detail-price">{priceFormatter(prod.price)}</p>}
                    <p className="item-detail-desc">{prod.description}</p>
                    <Counter count={count} add={addCount} subtract={subtractCount}/>
                    {cartContext.amountInCart(prod) !== -1
                    && <Link className='cart-pay' to={'/cart'}>Finalizar compra</Link>}
                    { /* No hice desaparecer el counter debido a que me parece que alguien podría querer sumar más unidades del mismo producto y no sería posible */}
                    {count > 0 && <button className="cart-add" onClick={() => cartContext.addItem(prod, count)}>{presetText.addToCart}</button>}
                    {cartContext.amountInCart(prod) > 0 && <button className='cart-remove' onClick={() => cartContext.removeItem(prod)}>{presetText.removeFromCart}</button>}
                    <button className='cart-clear' onClick={() => cartContext.clearCart()}>{presetText.clearCart}</button> 
                    {cartContext.amountInCart(prod) > 0 && <p className='cart-units'>Hay {cartContext.amountInCart(prod)} unidades de este producto en el carrito</p>}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail