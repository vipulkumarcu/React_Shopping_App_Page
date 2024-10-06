import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

function CartButton ( props )
{
  const dispatch = useDispatch ();

  function toggleCartHandler ()
  {
    dispatch ( uiActions.toggleCart () );
  }

  return (
    <button className = { classes.button } onClick = { toggleCartHandler } >
      <span> My Cart </span>
      <span className = { classes.badge } > 1 </span>
    </button>
  );
};

export default CartButton;