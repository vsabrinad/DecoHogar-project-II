import './style.css'

const ItemListComponents = (saludo) => {
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
export default ItemListComponents;