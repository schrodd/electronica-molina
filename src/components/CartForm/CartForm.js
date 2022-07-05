import './CartForm.css'
import presetText from '../../helpers/presetText'
import { newOrder } from '../../services/firebase'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext/CartContext'
import Spinner from '../Spinner/Spinner'
import { Link } from 'react-router-dom'

const CartForm = () => {
    const {cart, cartTotalValue, clearCart} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState(undefined);
    const sendOrder = () => {
        const name = document.querySelector('#name').value
        const email = document.querySelector('#email').value
        const phone = document.querySelector('#phone').value
        /* insertar validación regex usando useEffect*/
        newOrder(
          { name, email, phone },
          cart,
          cartTotalValue(cart),
          setId,
          setLoading,
          clearCart
        );
    }
    const idToClipboard = () => {
      navigator.clipboard.writeText(id);
    }

    if (loading) {
        return <Spinner/>
    } else {
        if (id) {
            return (
              <div className="cart-form success">
                <i className="fa-solid fa-circle-check"></i>
                <h1 style={{margin:'20px 0 0 0'}}>¡Gracias!</h1>
                <p>
                  El ID de tu compra es: <b>{id}</b><i className="fa-solid fa-copy" onClick={() => idToClipboard()} style={{marginTop:0}}></i>
                </p>
                <Link to='/' className="go-back btn1">{presetText.goHome}</Link>
              </div>
            );
        } else {
            return (
              <div className="flex-centered">
                <div className="cart-form">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <h1 style={{marginLeft:0}}>{presetText.cfTitle}</h1>
                  <p>{presetText.cfSubtitle}</p>
                  <input
                    type="text"
                    placeholder={presetText.cfName}
                    id="name"
                  />
                  <input
                    type="email"
                    placeholder={presetText.cfEmail}
                    id="email"
                  />
                  <input
                    type="number"
                    placeholder={presetText.cfPhone}
                    id="phone"
                  />
                  <button className="btn1" onClick={() => sendOrder()}>
                    {presetText.finishPurchase}
                  </button>
                </div>
              </div>
            );
        }
    }
}

export default CartForm