import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import getProducts from "../utils/AsynMock";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
    getProducts().then(res=> {
        setProducts(res)
        setLoading(false)
    })
},[])

    if (loading) return <h1>Cargando...</h1>

    console.log(products);
    return (<>
    {
        getProducts.map((item => (
            <ul key={item.id}>
                <ItemDetail item={item}/>
            </ul>
        )))
    }
    </>);

}
export default ItemDetailContainer;