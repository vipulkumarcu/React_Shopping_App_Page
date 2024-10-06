import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: "p1", title: "My First Book", price: 6, description: "The First Book I ever wrote" },
  { id: "p2", title: "My Second Book", price: 5, description: "The Second Book I ever wrote" },
  { id: "p3", title: "My Third Book", price: 7, description: "The Third Book I ever wrote" },
  { id: "p4", title: "My Forth Book", price: 8, description: "The Forth Book I ever wrote" },
  { id: "p5", title: "My Fifth Book", price: 9, description: "The Fifth Book I ever wrote" },
];

function Products ( props )
{
  return (
    <section className = { classes.products } >
      <h2> Buy your favorite products </h2>
      <ul>
        {
          DUMMY_PRODUCTS.map (
            ( product ) => (
              <ProductItem
                key = { product.id }
                id = { product.id }
                title = { product.title }
                price = { product.price }
                description = { product.description }
              />
            )
          )
        }
        
      </ul>
    </section>
  );
};

export default Products;