const Counter = () => {
    const [value, setValue] = useState(0)
    const stock = 5
    const onAdd = (expresion) => {
        if (expresion === "+"){
            if (value < stock){
                setValue (value + 1)
            }
        }
        else{
            if (value <= stock){
                setValue(value -1)
            }
        }

    }
    return(<>
        <div>
        <button onClick={()=>onAdd("+")} disabled={value === stock}>+</button>
        <div>{value}</div>
        <button onClick={()=>onAdd("-")} disabled={value === 0}>-</button>
        <button onClick={() =>console.log("Item agragado al carrito")}>Agregar al carrito</button>
        </div>
    </>)
}
export default Counter;