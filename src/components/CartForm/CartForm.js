import './CartForm.css'
import presetText from '../../helpers/presetText'
import { newOrder } from '../../services/firebase'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext/CartContext'
import Spinner from '../Spinner/Spinner'

const CartForm = () => {
    const {cart, cartTotalValue} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState(undefined);
    const sendOrder = () => {
        const name = document.querySelector('#name').value
        const email = document.querySelector('#email').value
        const phone = document.querySelector('#phone').value
        console.log(`${name}, ${email}, ${phone}`)
        newOrder({name, email, phone}, cart, cartTotalValue(cart), setId, setLoading)
    }

    if (loading) {
        return <Spinner/>
    } else {
        if (id) {
            return (
              <>
                <h2>Gracias por tu compra</h2>
                <p>El ID de tu compra es {id}</p>
              </>
            );
        } else {
            return (
              <div className="flex-centered">
                <div className="cart-form">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <h1>{presetText.cfTitle}</h1>
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
                    type="text"
                    placeholder={presetText.cfPhone}
                    id="phone"
                    inputMode="numeric"
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