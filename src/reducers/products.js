const products = ( state=[], action ) => {
  switch (action.type) {
    case "PRODUCTS_FETCH":
      return ({...action.payload.products})
  
    default:
      return state
  }
};

export default products;