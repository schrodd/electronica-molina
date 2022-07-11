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
    const [id, setId] = useState(undefined)
    const [error, setError] = useState(false);
    const [checkData, setCheckData] = useState(false)

    const sendOrder = () => {
        const name = document.querySelector('#name').value
        const email = document.querySelector('#email').value
        const phone = document.querySelector('#phone').value
        const nameRegex = /(?:[a-z]{2,}\s?)+/i
        const mailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        const phoneRegex = /\d{8,11}/
        if (nameRegex.test(name) && mailRegex.test(email) && phoneRegex.test(phone)) {
          setCheckData(false)
          newOrder(
            { name, email, phone },
            cart,
            cartTotalValue(cart),
            setId,
            setLoading,
            clearCart,
            setError
          )
        } else {
          setCheckData(true)
        }
    }

    const idToClipboard = () => {
      navigator.clipboard.writeText(id);
    }

    if (loading) {
        return <Spinner/>
    } else {
        if (id && !error) {
            return (
              <div className="cart-form result">
                <i className="fa-solid fa-circle-check"></i>
                <h1 style={{margin:'20px 0 0 0'}}>¡Gracias!</h1>
                <p>
                  El ID de tu compra es: <b>{id}</b><i className="fa-solid fa-copy" onClick={() => idToClipboard()} style={{marginTop:0}}></i>
                </p>
                <Link to='/' className="go-back btn1">{presetText.goHome}</Link>
              </div>
            );
        } else if (!id && error) {
          return (
            <div className="cart-form result">
                <i className="fa-solid fa-circle-xmark"></i>
                <h1 style={{margin:'20px 0 0 0'}}>Error</h1>
                <p>
                  {presetText.notEnoughStock}
                </p>
                <Link to='/' className="go-back btn1">{presetText.goHome}</Link>
              </div>
          )
        } else {
            return (
              <div className="flex-centered">
                <div className="cart-form">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <h1 style={{marginLeft:0}}>{presetText.cfTitle}</h1>
                  <p>{presetText.cfSubtitle}</p>
                  <input type="text" placeholder={presetText.cfName} id="name"/>
                  <input type="email" placeholder={presetText.cfEmail} id="email"/>
                  <input type="number" placeholder={presetText.cfPhone} id="phone" />
                  {checkData === true && <p className='check-data'>{presetText.checkData}</p>}
                  <button className="btn1" onClick={() => sendOrder()}>
                    {presetText.finishPurchase}
                  </button>
                </div>
              </div>
            )
        }
    }
}

export default CartForm