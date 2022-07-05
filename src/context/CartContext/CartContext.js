import { useState, createContext } from 'react'

const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])
    const addItem = (prod, qty, stock) => {
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
    const resetCounter = (setCount) => {
        setCount(0)
    }
    const available = (prod) => {
        const inCart = amountInCart(prod)
        return inCart !== -1 ? prod.stock - inCart : prod.stock
    }
    const cartTotalValue = (cart) => cart.reduce((a, e) => a + e.prod.price * e.qty, 0)
    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, amountInCart, resetCounter, available, cartTotalValue}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext