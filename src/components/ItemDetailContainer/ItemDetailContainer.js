import { useEffect, useState } from 'react'
import { getProductBySku } from '../../services/firebase'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

const ItemDetailContainer = () => {
    const params = useParams()
    const sku = params.productSku

    const [loading, setLoading] = useState(true)
    const [prod, setProd] = useState({})
    useEffect(() => {
        getProductBySku(sku, setLoading, setProd)
        /* getProducts().then(res => setProd(res.find(e => e.id === id)))
        .catch(err => console.log(err)).finally(() => setLoading(false)) */
    }, [sku])

    if (loading) return <Spinner/>
    else return <ItemDetail prod={prod}/>
}

export default ItemDetailContainer