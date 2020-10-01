import React from "react";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import { connect } from "react-redux";

 
const App = ({ shoppingCart }) => {
  return (
    <div className="App p-1" style={{ direction: "rtl", textAlign: "right" }}>
      <div className="bg-dark text-white p-2">
        تعداد در سبد خرید{" "}
        <span className="badge badge-success">{shoppingCart.length}</span>
      </div>
      <div className="row m-0">
        <div className="col-md-12">
          <Products />
        </div>
        <div className="col-md-12">
          <Cart />
        </div>
      </div>
    </div>
  );
};

 
export default connect(state => {
  return {
    shoppingCart: state.shoppingCart
  };
})(App);