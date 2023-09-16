import React from "react";

export default function Header(props) {
  console.log("Home",props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1187/1187005.png?w=740&t=st=1665591331~exp=1665591931~hmac=4aed0e5df260f621e0dbc4fde0f253300a26f83f0303fb2b00788989e210b6a3 "
          alt=""
        />
      </div>
    </div>
  );
}
