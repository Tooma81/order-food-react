import { useContext, useEffect } from 'react';
import Header from './components/Header'
import Meals from './components/Meals'
import CartContext from './components/store/CartContext'

const App = () => {
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    console.log('Cart Context:', cartCtx.items);
  }, [cartCtx.items]); // Log when cart items change
 return (
    <>
      <Header />
      <Meals />
    </>
  );
}

export default App;
