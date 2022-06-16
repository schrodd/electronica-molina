import "./Item.css"
import { Link } from 'react-router-dom'
import priceFormatter from '../priceFormatter'
import '../presetText'
import presetText from "../presetText"

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
                    <Link to={`/detail/${id}`}>{presetText.seeDetail}</Link>
                </div>
            </div>
        </div>
    )
}

export default Item;