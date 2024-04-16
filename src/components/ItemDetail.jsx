const ItemDetail = ({item}) => {
    console.log(item)
    return (<><div className="mx-auto my-auto">
    <li>{item.category}</li>
    <img src={item.img}/>
    <li>{item.nombre}</li>
    <li>{item.precio}</li>
    </div>
    </>)
}
export default ItemDetail;