import React from 'react';

//Redux
import { connect } from 'react-redux';

//Components 
import Header from './components/Header';
import Slug from './components/Slug';
import CartComponent from './components/CartComponent';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App({ state, cartVisibility }) {

  console.log(state)

  return (
    <div className={`App ${cartVisibility ? "App__unvisible" : ""}`} aria-hidden={cartVisibility}>
      <Header/>
      {cartVisibility ? <CartComponent/> : null}
      <main className="main__wrap">
        <Slug/>
        <ProductList/>
      </main>
      <Footer/>
    </div>
  );
}

const MSTP = state => {
  return {
    state,
    cartVisibility: state.cartVisibility.visible,
  }
}


export default connect(MSTP)(App);
