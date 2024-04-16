import { useEffect, useState } from "react";
import products from '../utils/AsynMock';
import ItemDetail from "./ItemDetail";

const ItemList = () =>  {
    const [productsCharged, setProductsCharged] = useState([])
    const fakeApiCall = (products) => {
        return new Promise((resolve, reject) => {
            setTimeout ( () => {
                resolve(products)}
                , 2000
            )
        })
            
    }

    useEffect(() => {
        //const respProducts = fakeApiCall(products).then(resp => setProductsCharged(resp))
        //console.log(respProducts)
        fakeApiCall(products).then(resp => setProductsCharged(resp))
        

    },[])
    //console.log(setProductsCharged)
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

/*const ItemList = ({products}) => {
    return (
        <div className="flex">
            {
                products.map((elemento) => {
                    return <Item key={elemento.id} product={elemento}/>

                })
            }

        </div>
    )

}
export default ItemList;*/