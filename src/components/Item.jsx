const Item = ({item}) => {
    return(<>
    <div>
        {item. category}
        {item. img}
        {item. nombre}
        {item. precio}
        {item. description}
    </div>
    </>)
}



/*const Item = ({products}) => {
    return(
        <div className="w-40 bg-white">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.img}/>
            <link to ={`/producto/${product.id}`}>Ver detalles</link>
        </div>
    )
}
export default Item;
*/