import React , {useState} from "react";
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  const { id, nombre, peso, precio, imagen } = props.producto;
  const [count, setCount] = useState(0);

  return (
    <div className={styles.flexContainer}>
      <img className={styles.imagen} alt="hola" src={imagen}></img>
      <span className={styles.producto}>{nombre}</span>
      <span className={styles.peso}>Pieza de {peso}g</span>
      <span className={styles.precioEntero}>
        <span className={styles.precio}> {precio}€</span>
        <span> /ud.</span>
      </span>
      { count < 1 && (
      <button className={styles.boton} type="button" onClick={() => setCount(count + 1)}>
        Añadir al carro
      </button>
      )}
      { count > 0 && (
        <div className={styles.flexRow}>
          <div className={styles.flexCompra}>
            <span className={styles.enCarro}> En carro </span>
            <span className={styles.unidadesCarro}>
              <span>{count}</span>
              <span> ud.</span>
            </span>
          </div>
          <div className={styles.flexBotones}>
            <button className={styles.botonAñadirUnidad} type="button" onClick={() => setCount(count + 1)}>
              +ud
            </button>
            <button className={styles.botonElininarUnidad} type="button" onClick={() => setCount(count - 1)}>
              -ud
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

ProductCard.propTypes = {};

ProductCard.defaultProps = {};

export default ProductCard;
