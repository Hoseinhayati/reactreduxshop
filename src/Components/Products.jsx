import React, { Component } from "react";
import { getProducts } from "./../Data/data";
import { connect } from "react-redux";
import { addTocart } from "./../Actions/index";

 
class Products extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    const products = getProducts();
    this.setState({
      products
    });
  }

 
  render() {
    return (
      <div className="p-2" style={{ direction: "rtl", textAlign: "right" }}>
        <h2>محصولات</h2>
        <div className="row m-0 border p-2">
          {this.state.products.map((product, index) => {
            return (
              <div className="col-md-3 p-1" key={index}>
                <div className="border border-success p-2">
                  <h5>{`نام محصول : ${product.productName}`}</h5>
                  <h5>{`قیمت : ${product.price}`}</h5>
                  <button
                    onClick={() => {
                      this.props.dispatch(addTocart(product));
                    }}
                    className="btn btn-success"
                  >
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

 
export default connect()(Products);