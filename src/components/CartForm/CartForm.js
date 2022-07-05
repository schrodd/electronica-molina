import './CartForm.css'
import presetText from '../../helpers/presetText'

const CartForm = () => {
    return (
        <div className='flex-centered'>
            <div className='cart-form'>
                <i className="fa-solid fa-cart-shopping"></i>
                <h1>{presetText.cfTitle}</h1>
                <p>{presetText.cfSubtitle}</p>
                <input type='text' placeholder={presetText.cfName} id='name'/>
                <input type='email' placeholder={presetText.cfEmail} id='email'/>
                <input type='text' placeholder={presetText.cfPhone} id='phone' inputmode='numeric'/>
                <p style={{margin:'15px 0 5px 0'}}>Forma de pago</p>
                <select name='forma-de-pago' id='forma-de-pago'>
                    <option value='mercadopago'>Mercadopago</option>
                    <option value='transferencia'>Transferencia bancaria</option>
                </select>
                <button className='btn1'>{presetText.finishPurchase}</button>
            </div>
        </div>
    )
}

export default CartForm