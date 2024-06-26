import Counter from "./Counter";
import { useContext } from "react";
import { CartContext} from "../context/CartContext";


const ItemDetail = ({ item }) => {
  const { nombre, imagen, precio, isOnDiscount, descripcion, stock } = item;
  const { addItem, cart, removeItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(item, quantity)
    console.log('El item fue agregado correctamente')
  }

  const onRemove = (quantity) => {
    removeItem(item.id, quantity)
    console.log('El item fue eliminado correctamente')
  }

  console.log(cart)


  return (<>
    <div>
      <div className="col-span-1 row-span-3 px-6 py-4">
        <div className="font-bold text-xl mb-2">{nombre}</div>
        <div>
          <img src={imagen} alt={nombre} className="w-[250px] h-[250px]" />

        </div>
        <p className="text-gray-700 text-base">
          Precio: ${precio.toFixed(2)}
        </p>
        <p className="text-gray-700 text-base">{stock}</p>
        <p className="text-gray-700 text-base">{descripcion}</p>
        <Counter stock={stock} initial={0} item={item} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  </>);

}
export default ItemDetail;
