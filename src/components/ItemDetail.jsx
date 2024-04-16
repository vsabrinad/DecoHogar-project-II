const ItemDetail = ({item}) => {
    return (<>
    <li>{item.category}</li>
    <img src={item.img}/>
    <li>{item.nombre}</li>
    <li>{item.precio}</li>
    </>)
}
export default ItemDetail;