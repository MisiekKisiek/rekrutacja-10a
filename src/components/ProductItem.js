import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

//Redux
import { connect } from 'react-redux';
import { addToCart } from '../actions';

const ProductItem = ({product, general, addToCart}) => {

  const { freeDeliveryFromPrice } = general;
  const { id, imageUrl, isNew, name, price, promotionalPrice, sensor, type} = product;
  const correctPrice = price.toFixed(2);
  const correctPromotionalPrice = promotionalPrice ? promotionalPrice.toFixed(2) : null;
  const correctName = name.length > 17 ? name.slice(0,17).concat("...") : name;


  return ( <li className="product__item">
    <div className="product__item-wrap">
      {isNew ? <span className="product__item-new">Nowość</span> : null }
      <div className="product__item-image">
        <img src={imageUrl}  alt={`Mysz ${name}`} />
      </div>
      <h2 className="product__item-name">
        {correctName}
        <span>{name}</span>
      </h2>
      <div className="product__item-type">
        <span>Typ myszki:</span>
        <span>{type}</span>
      </div>
      <div className="product__item-sensor">
        <span>Sensor:</span>
        <span>{sensor}</span>
      </div>
      <span className="product__item-old-price">{correctPromotionalPrice ? `${correctPrice} zł` : " "}</span>
      <span className="product__item-normal-price">{correctPromotionalPrice ? `${correctPromotionalPrice} zł` : `${correctPrice} zł`}</span>
      <span className="product__item-free-delivery">
        <FontAwesomeIcon icon={faTruck} />
        Darmowa dostawa od {freeDeliveryFromPrice} złotych
      </span>
      <button 
        className="product__item-add-cart"
        onClick={()=>{ addToCart(id) }}
      >
        <span></span>
        dodaj do koszyka
      </button>
    </div>
  </li> );
}

const MDTP = { addToCart }
 
export default connect(null, MDTP)(ProductItem);