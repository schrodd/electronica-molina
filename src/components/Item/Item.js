import "./Item.css"
import { Link } from 'react-router-dom'
import priceFormatter from '../priceFormatter'

const Item = ({id, title, price, img}) => {

    return (
        <div className="item">
            <div className="item-img">
                <img src={img} alt={title}/>
            </div>
            <div className="item-text-container">
                <p className="item-id">{id}</p>
                <p className="item-title">{title}</p>
                <p className="item-price">{priceFormatter(price)}</p>
                <div className="view-more-btn flex-centered">
                    <Link to={`/detail/${id}`}>Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item;