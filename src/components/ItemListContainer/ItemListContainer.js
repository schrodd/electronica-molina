import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import Spinner from '../Spinner/Spinner'
import "./ItemListContainer.css"
import { getProductsByCategory } from "../../services/firebase"
import presetText from "../../helpers/presetText"

const ItemListContainer = () => {

    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const { productCat } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductsByCategory(productCat, setLoading, setProducts)
        }, [productCat])

    if (loading) {
        return <Spinner/>
    } else return (
        <div className={'itemListContainer'}>
            { products.length > 0
                ? <ItemList products={products}/>
                : <NotFound message={presetText.notFoundCategory}/>
            }
        </div>
    )
}

export default ItemListContainer