import priceFormatter from '../../helpers/priceFormatter'
import { Link } from 'react-router-dom'

const CartItem = ({ item:{prod}, item:{qty}, remove }) => {
    return (
        <div className='cart-item flex-centered'>
            <img src={prod.img} alt={prod.title}/>
            <p className='cart-qty'>{qty}</p>
            <Link className='cart-title' to={`/detail/${prod.id}`}>{prod.title}</Link>
            <p className='cart-price-unit'>{priceFormatter(prod.price)} c/u</p>
            <p className='cart-price'>{priceFormatter(prod.price*qty)}</p>
            <button className='cart-remove-item' onClick={() => remove(prod)}>
                <i className={"fa-solid fa-times"}></i>
            </button>
        </div>
    )
}

export default CartItem