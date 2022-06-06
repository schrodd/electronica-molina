import { useEffect, useState } from 'react'
import { getProducts } from '../asyncmock'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

const ItemDetailContainer = () => {
    const params = useParams()
    console.log(params)
    const id = params.productId
    console.log(id)

    const [loading, setLoading] = useState(true)
    const [prod, setProd] = useState({})
    useEffect(() => {
        getProducts().then(res => setProd(res.find(e => e.id === id)))
        .catch(err => console.log(err)).finally(() => setLoading(false))
    }, [id])

    if (loading) return <Spinner/>
    else return <ItemDetail {...prod}/>
}

export default ItemDetailContainer