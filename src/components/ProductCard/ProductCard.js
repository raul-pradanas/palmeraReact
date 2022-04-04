import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  const { id, nombre, peso, precio, imagen } = props.producto;
  let unidades = 0;

  function aumentaUnidades(){
    unidades = unidades + 1;
  }

  function disminuyeUnidades(){
    unidades = unidades - 1;
  }

  return (
    <div className={styles.flexContainer}>
      <img className={styles.imagen} alt="hola" src={imagen}></img>
      <span className={styles.producto}>{nombre}</span>
      <span className={styles.peso}>Pieza de {peso}g</span>
      <span className={styles.precioEntero}>
        <span> {precio}€</span>
        <span> /ud.</span>
      </span>
      { unidades < 1 && (
      <button className={styles.boton} type="button" onClick={aumentaUnidades()}>
        Añadir al carro
      </button>
      )}
      {unidades > 0 && (
        <div className={styles.flexRow}>
          <div className={styles.flexCompra}>
            <span className={styles.enCarro}> En carro </span>
            <span className={styles.unidadesEnCarro}>
              <span>{unidades}</span>
              <span> ud.</span>
            </span>
          </div>
          <div className={styles.flexBotones}>
            <button className={styles.botonAñadirUnidad} type="button" onClick = {aumentaUnidades()}>
              +ud
            </button>
            <button className={styles.botonElininarUnidad} type="button" onClick = {disminuyeUnidades()}>
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
