import ItemList from "../ItemList/ItemList"
// import { getProducts } from "../asyncmock"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import Spinner from '../Spinner/Spinner'
import "./ItemListContainer.css"
import { getProductsByCategory } from "../../services/firebase"
import presetText from "../../helpers/presetText"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { productCat } = useParams()
    
    useEffect(() => {
        getProductsByCategory(productCat, setLoading, setProducts)
    }, [productCat])

    /* 1er intento - Firebase */
    /* useEffect(() => {
        setLoading(true)
        const collectionRef = productCat
        ? query(collection(db, 'products'), where('category', '==', productCat))
        : collection(db, 'products')

        getDocs(collectionRef)
        .then(response => {
            const productsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(productsFormatted)
        }).catch(e => console.log(e))
        .finally(() => setLoading(false)) */

        /* Asyncmock */
        /* getProducts().then((response) => {
            setProducts(
                params.productCat != undefined
                ? response.filter(e => e.category == params.productCat)
                : response
            )
        }).catch(e => console.log(e)).finally(() => setLoading(false))
    }, [productCat]) */

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