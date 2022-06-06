import "./ItemDetail.css"
import priceFormatter from '../priceFormatter'

const ItemDetail = ({id, title, price, img, category, description}) => {
    console.log(price)
    return (
        <div className="flex-centered">
            <div className="item-detail">
                <img src={img}/>
                <div className="item-detail-text">
                    <p className="item-detail-cat">Categoría: <b>{category}</b></p>
                    <p className="item-id">{id}</p>
                    <h1 className="item-detail-title">{title}</h1>
                    {price !== undefined && <p className="item-detail-price">{priceFormatter(price)}</p>}
                    <p className="item-detail-desc">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail