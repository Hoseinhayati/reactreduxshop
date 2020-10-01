export const addTocart = product => ({
    type: "ADD_TO_CART",
    product
  });
  
   
  export const incrementCart = _id => ({
    type: "INCREMENT_CART",
    _id
  });
  
   
  export const decrementCart = _id => ({
    type: "DECREMENT_CART",
    _id
  });
  
   
  export const removeFromCart = _id => ({
    type: "REMOVE_CART",
    _id
  });