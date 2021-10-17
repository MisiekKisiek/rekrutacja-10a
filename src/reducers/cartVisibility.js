const cartVisibility = (state = {visible: false}, action) => {
  switch (action.type) {
    case "CHANGE_CART_VISIBILITY":
      return ({ visible: !{...state}.visible });
    default:
      return state;
  }
};

export default cartVisibility;