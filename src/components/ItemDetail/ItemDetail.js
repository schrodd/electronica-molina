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
                    <p className="item-detail-price">{priceFormatter(prod.price)}</p>
                    <p className="item-detail-desc">{prod.description}</p>
                    <p className="item-stock">{stockText(cartContext.available(prod))}</p>
                    <Counter count={count} setCount={setCount}/>
                    
                    {/* Si el contador es mayor a cero y menor a la cantidad disponible de ítems, se muestra el botón de sumar al carrito */}
                    {(count > 0 && count <= cartContext.available(prod)) && <button className="cart-add" onClick={() => cartContext.addItem(prod, count, prod.stock)}>{presetText.addToCart}</button>}

                    {/* Si la cantidad del producto que se está viendo en el carrito es mayor a cero, muestra el botón de finalizar compra, el de retirar producto del carrito, y el texto que indica cuántas unidades del mismo han sido agregadas al mismo */}
                    {cartContext.amountInCart(prod) > 0 &&
                        <>
                            <Link className='cart-pay' to={'/cart'}>Finalizar compra</Link>
                            <button className='cart-remove' onClick={() => cartContext.removeItem(prod)}>{presetText.removeFromCart}</button>
                            <p className='cart-units'>Hay {cartContext.amountInCart(prod)} unidades de este producto en el carrito</p>
                        </>}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail