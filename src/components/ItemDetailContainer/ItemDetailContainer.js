import { useEffect, useState } from 'react'
import { getProductById } from '../../services/firebase'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import NotFound from '../NotFound/NotFound'
import presetText from '../../helpers/presetText'

const ItemDetailContainer = () => {
    const params = useParams()
    const id = params.productId
    const [loading, setLoading] = useState(true)
    const [prod, setProd] = useState({})
    useEffect(() => {
        getProductById(id, setLoading, setProd)
    }, [id])
    return loading ? <Spinner/> : prod.title === undefined ? <NotFound message={presetText.notFoundProduct} /> : <ItemDetail prod={prod}/>
}

export default ItemDetailContainer