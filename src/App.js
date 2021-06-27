import './App.css';
import { Router } from './router/Router';
import { CartComponentContext } from './context/CartContext';

const App = () => {
  return <>
  <CartComponentContext>
    <Router />
  </CartComponentContext>
  </>;
}

export default App;

