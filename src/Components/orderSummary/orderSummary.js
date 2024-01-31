import { useContext } from "react";
import classes from "../Cart/Cart.module.css";
import CartContext from "../../Store/Cart-context";
import CartItem from "./../Cart/CartItem";

const OrderSummary = (props) => {
  const cartctx = useContext(CartContext);
  const cartItem = cartctx.items.length > 0;

  const totalAmount = `₹${cartctx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartctx.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    cartctx.addItem({...item , amount : 1})
  };

  return (
    <div>
      <ul className={classes["cart-items"]}>
        {cartctx.items.map((items) => (
          <CartItem
            key={items.id}
            name={items.name}
            amount={items.amount}
            price={items.price}
            onRemove={cartItemRemoveHandler.bind(null , items.id)}
            onAdd={cartItemAddHandler.bind(null , items)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => props.closeCart(false)}
        >
          Close
        </button>
        {cartItem && (
          <button
            className={classes.button}
            onClick={() => props.closeCart(false)}
          >
            Order
          </button>
        )}
      </div>
      </div>
  );
};

export default OrderSummary;
