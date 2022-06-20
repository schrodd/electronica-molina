import { useEffect, useState } from 'react'
import { getProducts } from '../asyncmock'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

const ItemDetailContainer = () => {
    const params = useParams()
    const id = params.productId

    const [loading, setLoading] = useState(true)
    const [prod, setProd] = useState({})
    useEffect(() => {
        getProducts().then(res => setProd(res.find(e => e.id === id)))
        .catch(err => console.log(err)).finally(() => setLoading(false))
    }, [id])

    if (loading) return <Spinner/>
    else return <ItemDetail prod={prod}/>
}

export default ItemDetailContainer