import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const handleShowCart = () => {
    dispatch(cartActions.showCart());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={handleShowCart}>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
