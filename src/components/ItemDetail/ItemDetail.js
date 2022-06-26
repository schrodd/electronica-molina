import "./ItemDetail.css"
import priceFormatter from "../../helpers/priceFormatter"
import presetText from '../../helpers/presetText'
import Counter from '../Counter/Counter'
import {Link} from 'react-router-dom'
import {useState, useContext} from 'react'
import CartContext from '../../context/CartContext/CartContext'
import {stockText} from "../../helpers/stockTextFormatter"

const ItemDetail = ({prod}) => {
    const cartContext = useContext(CartContext)
    const [count, setCount] = useState(0)

    return (
        <div className="flex-centered">
            <div className="item-detail">
                <img src={prod.img} alt={prod.title}/>
                <div className="item-detail-text">
                    <p className="item-detail-cat">{presetText.itemDetailCategory}<b>{prod.category}</b></p>
                    <p className="item-sku">{prod.sku}</p>
                    <h1 className="item-detail-title">{prod.title}</h1>
                    {prod.price !== undefined && <p className="item-detail-price">{priceFormatter(prod.price)}</p>}
                    <p className="item-detail-desc">{prod.description}</p>
                    <p className="item-stock">{stockText(prod.stock)}</p>
                    <Counter count={count} setCount={setCount}/>
                    {(count > 0 && count <= prod.stock - cartContext.amountInCart(prod))
                    && <button className="cart-add" onClick={() => cartContext.addItem(prod, count, prod.stock)}>{presetText.addToCart}</button>}
                    {cartContext.amountInCart(prod) > 0
                    && <Link className='cart-pay' to={'/cart'}>Finalizar compra</Link>}
                    {cartContext.amountInCart(prod) > 0 && 
                        <>
                            <button className='cart-remove' onClick={() => cartContext.removeItem(prod)}>{presetText.removeFromCart}</button>
                            <p className='cart-units'>Hay {cartContext.amountInCart(prod)} unidades de este producto en el carrito</p>
                        </>}
                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetail