export const addToCart = (id) => ({
  type: "ADD_TO_CART",
  payload:{
    id,
  },
});

export const changeAmount = (id, amount) => ({
  type: "CHANGE_CART_ITEM_AMOUNT",
  payload: {
    id,
    amount,
  }
});

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: {
    id,
  }
})

export const cartVisibility = () => ({
  type: "CHANGE_CART_VISIBILITY",
})