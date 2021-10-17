import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

//Redux
import { connect } from 'react-redux';
import { changeAmount, removeFromCart } from '../actions';

const CartItem = ({ item, products, changeAmount, removeFromCart }) => {

  const [amountInput, setamountInput] = useState(item.amount)
  
  const product = products.find(product => item.id === product.id);
  const { id, imageUrl, name, price, promotionalPrice, sensor, type} = product;

  const correctPrice = price.toFixed(2);
  const correctPromotionalPrice = promotionalPrice ? promotionalPrice.toFixed(2) : null;
  const correctName = name.slice(0,15).concat("...");

  const onChangeAmount = (value) => {
    if(value === ""){
      setamountInput(value);
    } else if(value <= 10){
      setamountInput(value);
      changeAmount(id, value);
    }
  }

  return ( <li className="cart__bag-item">
    <div className="cart__bag-item-image">
      <img src={imageUrl}  alt={`Mysz ${name}`} />
    </div>
    <div className="cart__bag-item-info">
      <h2 className="cart__bag-item-name">{correctName}</h2>
      <div className="cart__bag-item-type">
        <span>Typ myszki:</span>
        <span>{type}</span>
      </div>
      <div className="cart__bag-item-sensor">
        <span>Sensor:</span>
        <span>{sensor}</span>
      </div>
    </div>
    <div className="cart__bag-item-price">
      <span className="cart__bag-item-old-price">{correctPromotionalPrice ? `${correctPrice} zł` : " "}</span>
      <span className="cart__bag-item-normal-price">{correctPromotionalPrice ? `${correctPromotionalPrice} zł` : `${correctPrice} zł`}</span>
      <div className="cart__bag-item-det">
        <span>szt.</span>
        <input 
          type="text" 
          pattern="[0-9]+"
          value={amountInput}
          onChange={(e)=>{onChangeAmount(e.target.value)}}
        />
        <button onClick={()=>{
          removeFromCart(id);
        }}><FontAwesomeIcon icon={faTrashAlt} /></button>
      </div>
    </div>
  </li> );
};

const MSTP = state => {
  return({
    products: state.products,
  })
};

const MDTP = { changeAmount, removeFromCart };
 
export default connect(MSTP, MDTP)(CartItem);