const presetText = {
    // Lorem ipsum
    lorem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  
    // No se encuentra un elemento o sitio
    notFoundTitle: '¡Lo sentimos!',
    notFoundDesc: 'No hemos encontrado lo que buscabas',
    goHome: 'Ir al inicio',
    notFoundCategory: 'No hay productos en esta categoría',
  
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

    // stockTextFormatter
    zeroStock: 'No hay más unidades de este producto',
    oneInStock: 'Queda sólo 1 unidad de este producto ¡corre!',
    lowStock: (stock) => `Quedan sólo ${stock} unidades de este producto`,
    stock: (stock) => `Quedan ${stock} unidades de este producto`,

}

export default presetText