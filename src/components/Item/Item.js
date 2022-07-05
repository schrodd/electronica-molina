import "./Item.css"
import { Link } from 'react-router-dom'
import presetText from "../../helpers/presetText"
import priceFormatter from "../../helpers/priceFormatter"

const Item = ({id, title, price, img, sku}) => { 

    return (
        <div className="item">
            <div className="item-img">
                <img src={img} alt={title}/>
            </div>
            <div className="item-text-container">
                <p className="item-sku">{sku}</p>
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