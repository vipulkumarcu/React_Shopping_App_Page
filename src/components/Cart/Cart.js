import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

function Cart ( props )
{
  const cart = useSelector ( state => state.cart.cartItems );

  return (
    <Card className = { classes.cart } >
      <h2> Your Shopping Cart </h2>
      <ul>
        {
          cart.map (
            ( item ) => (
              <CartItem 
                key = { item.id }
                item = { { id: item.id, title: item.name, quantity: item.quantity, total: item.totalPrice, price: item.price } }
              />
            )
          )
        }
      </ul>
    </Card>
  );
};

export default Cart;