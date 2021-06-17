import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return <>
    <NavBar />
    <ItemListContainer mensaje='Aqui va la tienda' />
    <ItemDetailContainer />
  </>;
}

export default App;

