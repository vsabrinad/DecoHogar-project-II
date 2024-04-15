//import { useState } from 'react';
//import ItemList from '../ItemList/ItemList';
//import {getProducts, getProductsByCategory} from '../'
//import { useParams } from 'react-router-dom'

const ItemListContainer = ({saludo}) => {

    //const [loading, setLoading] = useState(true)

    //const [products, setProducts] = useState([])

    //const {category} = useParams()

    const clickbutton = () => {
        console.log('click')
    } 
    return ( <> 
    <div>
        <h2>{saludo}</h2>
        <p>Todo lo que necesitas para tu hogar.</p>
        <button onClick={() => clickbutton()}>Ingresar</button>
    </div>
    </>);
}
export default ItemListContainer;