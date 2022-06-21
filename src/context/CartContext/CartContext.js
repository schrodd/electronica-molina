// Personalmente hubiera usado otro método para mantener la info de los productos en el context, pero me limité a realizar la actividad como fué solicitada.
// Me gustaría haber usado sólo el ID en vez de el objeto entero del producto. De esa forma no se duplican datos (no guardaría en el context un duplicado del objeto prod que trae, en este caso, del asyncmock)

import { useState, createContext } from 'react'

const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])
    const addItem = (prod, qty) => {
        const copyCart = [...cart]
        const exists = cart.findIndex(e => e.prod.id === prod.id)
        if (exists === -1){
            copyCart.push({prod,qty})
        } else {
            copyCart[exists].qty += qty
        }
        setCart(copyCart)
    }
    const removeItem = (prod) => {
        const copyCart = [...cart]
        const exists = cart.findIndex(e => e.prod.id === prod.id)
        if (exists === -1){
            console.log("El producto no existe en carrito")
        } else {
            copyCart.splice(exists,1)
        }
        setCart(copyCart)
    }
    const clearCart = () => {
        setCart([])
    }
    const amountInCart = (prod) => {
        const exists = cart.find(e => e.prod.id === prod.id)
        if (exists) return exists.qty
        return -1 // Si no existe en carrito
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, amountInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext