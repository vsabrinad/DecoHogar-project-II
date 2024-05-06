import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import {mockProducts} from "../utils/AsynMock";
import {fakeApiCall} from "../utils/fakeApiCall";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
    fakeApiCall(mockProducts).then(res=> {
        setProducts(res)
        setLoading(false)
    })
},[])

    if (loading) return <h1>Cargando...</h1>

    console.log(products);
    console.log(mockProducts);
    return (<>
    {
        products.products.map((item => (
            <ul key={item.id}>
                <ItemDetail item={item}/>
            </ul>
        )))
    }
    </>);

}
export default ItemDetailContainer;