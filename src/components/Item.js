const Item = ({id, title, price, img}) => {

    console.log(img)

    return (
        <div className={"item"}>
            <div className={"item-img"}>
                <img src={img} alt={title}/>
            </div>
            <p className={"item-id"}>{id}</p>
            <p className={"item-title"}>{title}</p>
            <p className={"item-price"}>{price}</p>
        </div>
    )
}

export default Item;