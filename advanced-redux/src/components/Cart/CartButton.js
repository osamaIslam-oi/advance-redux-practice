import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../store/cartUi";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const itemsQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  function handleShowCart() {
    dispatch(cartUiActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={handleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsQuantity}</span>
    </button>
  );
};

export default CartButton;
