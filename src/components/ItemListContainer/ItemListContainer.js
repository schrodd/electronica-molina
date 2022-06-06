import ItemList from "../ItemList/ItemList"
import { getProducts } from "../asyncmock"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import Spinner from '../Spinner/Spinner'
import "./ItemListContainer.css"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()
    
    useEffect(() => {
        setLoading(true)
        getProducts().then((response) => {
            setProducts(
                params.productCat != undefined
                ? response.filter(e => e.category == params.productCat)
                : response
            )
        }).catch(e => console.log(e)).finally(() => setLoading(false))
    }, [params])

    if (loading) {
        return <Spinner/>
    } else return (
        <div className={'itemListContainer'}>
            { products.length > 0
                ? <ItemList products={products}/>
                : <NotFound/>
            }
        </div>
    )
}

export default ItemListContainer