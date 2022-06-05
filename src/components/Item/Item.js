import "./Item.css" 

const Item = ({id, title, price, img}) => {

    console.log(img)

    return (
        <div className={"item"}>
            <div className={"item-img"}>
                <img src={img} alt={title}/>
            </div>
            <div className={"item-text-container"}>
                <p className={"item-id"}>{id}</p>
                <p className={"item-title"}>{title}</p>
                <p className={"item-price"}>{price}</p>
            </div>
        </div>
    )
}

export default Item;