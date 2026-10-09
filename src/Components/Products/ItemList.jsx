import Item from "./Item";
import style from "./ItemList.module.css"

const ItemList = ({ productos }) => {
  return (
    <div className={style.item_list}>
      {productos.map(producto => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default ItemList
