import ItemList from "../ItemList/ItemList"
import { getProducts } from "../asyncmock"
import { useEffect, useState } from "react"
import "./ItemListContainer.css"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => { // Para que corra por única vez tras el montaje del componente
        getProducts().then((response) => {
            setProducts(response)
        })
    }, [])

    return (
        <div className={'itemListContainer'}>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer