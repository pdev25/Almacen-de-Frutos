import style from "./Item.module.css";
import BotonFavorito from "../BotonFavorito";

const Item = ({ id, Nombre, Precio, descripcion, imagen }) => {
  return (
    <div className={style.item_card}>
      <div>
        <img className={style.image} src={imagen} alt={Nombre} />
      </div>
      <div>
        <span className={style.id}>ID: {id}</span>

        <h2 className={style.nombre}>{Nombre}</h2>

        <p className={style.precio}>${Precio}</p>

        <p className={style.descripcion}>{descripcion}</p>
      </div>
      <BotonFavorito />
      <button className={style.btn_comprar}>Comprar</button>
    </div>
  );
};

export default Item;
