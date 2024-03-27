import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);

  function handleAddItem() {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  }
  function handleRemoveItem() {
    dispatch(cartActions.removeItemFromCart(id));
  }

  return (
    <>
      {showCart && (
        <ul>
          <li className={classes.item}>
            <header>
              <h3>{title}</h3>
              <div className={classes.price}>
                ${total.toFixed(2)}{" "}
                <span className={classes.itemprice}>
                  (${price.toFixed(2)}/item)
                </span>
              </div>
            </header>
            <div className={classes.details}>
              <div className={classes.quantity}>
                x <span>{quantity}</span>
              </div>
              <div className={classes.actions}>
                <button onClick={handleRemoveItem}>-</button>
                <button onClick={handleAddItem}>+</button>
              </div>
            </div>
          </li>
        </ul>
      )}
    </>
  );
};

export default CartItem;
