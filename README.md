# Electrónica Molina

Este proyecto pertenece a Andrés Molina y está hecho para el curso de React en CODERHOUSE.

## Comenzando
Necesitas tener Node instalado en tu pc para poder ver el proyecto en tu pc. [Puedes bajarlo desde acá](https://nodejs.org/es/download/).

**Si no tienes GIT instalado**:
Descarga el repositorio como .zip y descomprímelo en una carpeta de tu preferencia.

**Si tienes GIT instalado**:
Copia el link al repositorio. Luego, en tu consola ingresa:

### `npm clone (link)`

Para poder probarlo necesitas instalar las dependencias. Para hacerlo, usa:

### `npm install`

Luego, para visualizar el proyecto en tu navegador:

### `npm start`

## .env
Este proyecto necesita la configuración de variables de entorno con las credenciales de Firebase. Por favor contáctame para poder facilitarte el archivo .env.
También puedes usar tu propias credenciales, en ese caso necesitas usar estos nombres:

    REACT_APP_apiKey
    REACT_APP_authDomain
    REACT_APP_projectId
    REACT_APP_storageBucket
    REACT_APP_messagingSenderId
    REACT_APP_addId

Y necesitas tener las siguientes colecciones y campos (la mayoría son del tipo string excepto aquellas en las que se especifique lo contrario):

    orders (vacía)
    products
        id
            category (necesitas usar alguna de las siguientes: parlantes, auriculares, notebooks, tablets y wearables)
            description
            img (link a una imagen, preferiblemente cuadradas y cercanas a los 1000x1000px)
            price (number)
            sku
            stock (number)
            title

## Sobre el sitio

### Inicio y funcionamiento básico
Esta web está hecha únicamente con React, CSS y Firebase como proveedor de datos. 
Apenas comenzar verás un listado de productos de diferentes categorías. En la barra de navegación verás botones con los nombres de dichas categorías, que te servirán para filtrar los productos que aparecen.
Podrás clickear encima de cada producto para ir a la página de cada uno, donde verás la foto en detalle y la descripción del mismo.

Podrás navegar adelante y atrás usando los botones del navegador, o escribiendo directamente en la url la categoría o id del producto que necesitas.
Hay una categoría (wearables) que intencionalmente no contiene productos, por lo que carga un módulo que te informa de ello y te permite volver al inicio de la web.
He añadido también un spinner para que se muestre hasta que el componente se renderice nuevamente con la información que carga de forma asíncrona.
Los estilos de la página son CSS puro, en algún momento pasaré todo a SASS.

Esta es una demostración de la navegación por el sitio, se muestra:
* Index
* Categorías (filtros, navegación)
* Detalle (contador, verif. de stock)
* Carrito (manejo de datos, sumar y eliminar productos)
* Checkout (verificación de datos, 2da verif. de stock)

<img src='/gif.gif'>

A continuación describiré los componentes más importantes:

### Item List Container
Es el componente que se carga por defecto. Carga todos los productos existentes, si no se ha filtrado.
Este componente revisa la URL en busca de una ruta que indique que se ha filtrado por alguna categoría. En ese caso, muestra únicamente productos correspondientes a la misma.

Mientras se realiza la carga, se muestra un spinner.
Si se ha filtrado usando los botones de la barra de navegación, la categoría que se está visualizando tendrá otro estilo (texto en bold).

### Item Detail
Muestra más información sobre el producto. Revisa la URL en busca del ID del producto y la trae desde Firebase.
También es la vista que permite añadir el producto al carrito, y posee un contador para elegir la cantidad que se desea sumar.
Este contador es siempre visible, tiene como mínimo 0 unidades, y no tiene un máximo (ya que no lo necesita).

Al utilizar el contador, se mostrarán los botones de "agregar", "finalizar compra" y "sacar". El primero es visible únicamente si es posible añadir al carrito la cantidad que el contador está mostrando actualmente, para ello se hace una verificación entre el stock actual del producto y la cantidad existente en el carrito. El cliente no podrá nunca sumar a su carrito más unidades de las que haya en stock. De igual forma, antes de confirmar la orden se hace una segunda verificación de stock, lo cual detallaré más adelante en la descripción de los componentes Cart y CartForm (Checkout).

Si el producto que se está visualizando existe en el carrito, se muestra el botón de "finalizar compra", que te lleva directamente al carrito.
El botón "sacar" permite sacar todas las unidades del producto del carrito.
Por último, este componente posee un texto que te indica cuántas unidades quedan en stock (stock firebase - unidades en carrito), y otro que te indica cuántos hay en tu carrito.

### Cart
El carrito de compras. Muestra un listado con todos los productos añadidos, también un botón para vaciarlo rápidamente.
Si no hay productos en el carrito muestra un texto que lo indica y un botón para volver al inicio.

Contiene una versión pequeña de la imagen del producto, las unidades que se han añadido, el título del producto (anchor, te lleva al Item Detail, en caso de querer volver y sumar más unidades de alguno de ellos), el precio unitario, el precio total (unit * unid), y un botón que te permite sacar el producto del carrito.

Debajo de la tabla que muestra los productos, hay un texto que indica el total de la compra, y un botón para finalizar la compra que lleva al siguiente componente, CartForm (que debió llamarse Checkout).

### Cart Form (Checkout)
Formulario de datos del cliente. Pide 3 simples datos: nombre, correo electrónico y número de teléfono.
El botón "finalizar compra" siempre es visible y activo, aunque si los datos son incorrectos mostrará un aviso para que se corrijan los errores.

Los campos poseen validación Regex al pulsar el botón. Otra opción era validar el campo con el ingreso de cada caracter, no me pareció necesario ahora, pero en un proyecto real preferiría hacerlo de esa forma.
El botón validará el stock del carrito, si la validación es exitosa, mostrará al usuario su ID de compra, un botón para copiarlo y un botón para volver al inicio. 

Si la validación no es exitosa (ejemplo, otro cliente compró el mismo producto justo antes y ya no hay stock), mostrará un mensaje informando eso, se vaciará el carrito, y mostrará un botón para volver al inicio.

### Helpers
Se utilizaron 3 helpers, uno que permite tener todos los textos en un mismo archivo, otro que da formato de moneda a los precios, y otro que permite que cambie de forma dinámica el texto que indica la cantidad de stock restante de un producto (cambiará dependiendo si queda uno, entre dos y cinco, entre seis y diez o más de diez).

## Consultas
Por cualquier duda siéntete libre de contactarme  vía Whatsapp [(+54 9 11 2255-0255)](https://api.whatsapp.com/send?phone=541122550255&text=%C2%A1Hola%21)
