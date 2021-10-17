import React from 'react';

//Components
import ProductItem from './ProductItem';

//Redux
import { connect } from 'react-redux';

const ProductList = ({products, general}) => {
  
  const renderProducts = products.map(product => {
    return <ProductItem key={product.id} product={product} general={general}/>
  })
  return ( <ul className="product__list">
    {renderProducts}
  </ul> );
}

const MSTP = ({products, general}) => {
  return ({
    general,
    products,
  })
}
 
export default connect(MSTP)(ProductList);