import React from 'react';

//Redux
import { connect } from 'react-redux';
import { cartVisibility } from '../actions';

//Logo
import { ReactComponent as LogoHeader } from "../images/logo-black.svg";
import { ReactComponent as CartHeader } from "../images/supermarket-basket.svg";

const Header = ({ amount, cartVisibility }) => {
  return ( <header className="header__wrap">
    <div className="header__logo">
      <LogoHeader/>
    </div>
    <div className="header__cart">
      <button
        onClick={()=>{
          cartVisibility();
        }}
      >
        <CartHeader/>
        {amount > 0 ? <span className="header__cart-amount">{amount}</span> : null}
      </button>
    </div>
  </header> );
}

const MSTP = state => {
  let amount = 0;
  state.cart.forEach(product => {amount += product.amount});
  return{
    amount,
  }
}

const MDTP = { cartVisibility }
 
export default connect(MSTP, MDTP)(Header);