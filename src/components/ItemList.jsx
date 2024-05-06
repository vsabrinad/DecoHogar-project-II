import { useEffect, useState } from "react";
import {mockProducts} from '../utils/AsynMock';
import ItemDetail from "./ItemDetail";
import fakeApiCall from "../utils/fakeApiCall";

const ItemList = () =>  {
    const [productsCharged, setProductsCharged] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        //const respProducts = fakeApiCall(products).then(resp => setProductsCharged(resp))
        //console.log(respProducts)
        fakeApiCall(mockProducts).then(resp => {setProductsCharged(resp) , setLoading(false)})
        

    },[])
    console.log(productsCharged);
    if (loading) return <h1>Cargando...</h1>

    return (<>
    <div>
        {
        productsCharged.products.length > 0 && productsCharged.products.map((item, index) => {
            return <ItemDetail key={index} ietm={item}/>
        }
        )
        }
    </div>
    </>);

}
export default ItemList;