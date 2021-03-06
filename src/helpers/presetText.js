const presetText = {
    // Lorem ipsum
    lorem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  
    // No se encuentra un elemento o sitio
    notFoundTitle: '¡Lo sentimos!',
    notFoundDesc: 'No hemos encontrado lo que buscabas',
    goHome: 'Ir al inicio',
    notFoundCategory: 'No hay productos en esta categoría',
    notFoundProduct: 'No se ha encontrado el producto',
  
    // Botón de ver detalle del producto
    seeDetail: 'Ver detalle',
  
    // ItemDetail, texto antes de la categoría
    itemDetailCategory: 'Categoría: ',
  
    // Carrito de compras
    addToCart: 'Agregar',
    clearCart: 'Limpiar carrito',
    removeFromCart: 'Sacar',
    cartTitle: 'Carrito de compras',
    emptyCart: 'No hay productos en tu carrito',
    finishPurchase: 'Finalizar compra',
    notEnoughStock: 'No hay suficiente stock para completar tu compra',
    checkData: 'Por favor verifica tus datos',

    // stockTextFormatter
    zeroStock: 'No hay más unidades de este producto',
    oneInStock: 'Queda sólo 1 unidad de este producto ¡corre!',
    lowStock: (stock) => `Quedan sólo ${stock} unidades de este producto`,
    stock: (stock) => `Quedan ${stock} unidades de este producto`,

    // CartForm
    cfTitle: '¡Ya casi!',
    cfSubtitle: 'Llene el siguiente formulario para finalizar su compra',
    cfName: 'Nombre y apellido',
    cfEmail: 'Correo electrónico',
    cfPhone: 'Número de teléfono (sin espacios ni guiones)',
}

export default presetText