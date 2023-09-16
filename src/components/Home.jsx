import React from "react";

export default function Home(props) {
  console.log("Home",props.data);
  return (
    <div>
      
      <h1>Home component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://images.unsplash.com/photo-1640437830863-8f7f38327319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={()=>
            props.addToCartHandler({price:1000, name:'i phone 11'})}>
            Add to cart</button>
            <button className="remove-cart-btn" onClick={()=>
            props.removeToCartHandler()}>
            Remove to cart</button>
        </div>
      </div>
    </div>
  );
}
