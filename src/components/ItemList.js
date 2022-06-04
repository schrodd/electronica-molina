import Item from "./Item"

const ItemList = ({products}) => {
    return (
        <>
            {products.map((e) => <Item key={e.id} {...e}/>)}
        </>
    )
}

export default ItemList;