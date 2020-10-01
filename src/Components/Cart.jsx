import React, { Component } from "react";
import { connect } from "react-redux";
import {
  decrementCart,
  removeFromCart,
  incrementCart
} from "./../Actions/index";

 
class Cart extends Component {
  state = {};
  render() {
    const { shoppingCart } = this.props;
    return (
      <div className="p-1 border">
        <h2>سبد خرید</h2>
        <div className="row m-0">
          {shoppingCart.map((product, index) => {
            return (
              <div className="col-md-12" key={index}>
                <div className="row m-0">
                  <div className="col-md-3">{`نام محصول ${product.productName}`}</div>
                  <div className="col-md-3">{`قیمت ${product.price}`}</div>
                  <div className="col-md-3">{`تعداد ${product.count}`}</div>
                  <div className="col-md-3">
                    <button
                      onClick={() => {
                        this.props.dispatch(incrementCart(product._id));
                      }}
                      className="btn btn-sm btn-success"
                    >
                      افزایش
                    </button>
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() => {
                        this.props.dispatch(decrementCart(product._id));
                      }}
                    >
                      کاهش
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        this.props.dispatch(removeFromCart(product._id));
                      }}
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

 
export default connect(state => {
  return {
    shoppingCart: state.shoppingCart
  };
})(Cart);