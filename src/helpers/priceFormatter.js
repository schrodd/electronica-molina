const priceFormatter = (amount) => {
    return amount.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })
}

export default priceFormatter