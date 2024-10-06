import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

function CartButton ( props )
{
  const dispatch = useDispatch ();

  const totalCartQuantity = useSelector ( state => state.cart.totalQuantity )

  function toggleCartHandler ()
  {
    dispatch ( uiActions.toggleCart () );
  }

  return (
    <button className = { classes.button } onClick = { toggleCartHandler } >
      <span> My Cart </span>
      <span className = { classes.badge } > { totalCartQuantity } </span>
    </button>
  );
};

export default CartButton;