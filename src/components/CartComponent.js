import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTruck } from '@fortawesome/free-solid-svg-icons';

//Redux
import { connect } from 'react-redux';
import { cartVisibility } from '../actions';

//Components
import CartItem from './CartItem';

const CartComponent = ({ cartVisibility, cart, products, deliveryFree }) => {

  const renderCartItems = cart.map( item => <CartItem key={item.id} item={item}/>);

  const sumPrice = cart.reduce( (prev, curr) => {
    const product = products.find(e => curr.id === e.id);
    if(product.promotionalPrice){
      return prev + product.promotionalPrice * curr.amount;
    } else {
      return prev + product.price * curr.amount;
    }
  }, 0).toFixed(2);

  return ( <div className="cart__wrap">
    <div 
      className="cart__curtine"
      onClick={()=>{ cartVisibility() }}
    ></div>
    <div className="cart__bag" >
      <div className="cart__bag-close">
        <button onClick={()=>{ cartVisibility() }}><FontAwesomeIcon icon={faTimes} /></button>
      </div>
      <ul className="cart__bag-list">
        {renderCartItems}
      </ul>
      <div className="cart__bag-resume">
        <span className="cart__bag-resume-title">SUMA:</span>
        <div className="cart__bag-resume-sum">
          <span className="cart__bag-resume-sum-cash">{`${false ? sumPrice : sumPrice } zł`}</span>
          <span className="cart__bag-resume-delivery"><FontAwesomeIcon icon={faTruck} /> 
          {sumPrice > deliveryFree ? "Darmowa dostawa" : `Do darmowej dostawy brakuje ${(deliveryFree - sumPrice).toFixed(2)} zł`}
          </span>
        </div>
        <div className="cart__bag-resume-buy">
          <button onClick={()=>{cartVisibility()}}>wróć</button>
          <button>opłać</button>
        </div>
      </div>
    </div>
  </div> );
}


const MSTP = ({ cart, products, general }) => {
  return {
    cart,
    products,
    deliveryFree: general.freeDeliveryFromPrice,
  }
};

const MDTP = { cartVisibility };
 
export default connect(MSTP, MDTP)(CartComponent);