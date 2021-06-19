import './App.css';
import { NavBar } from './components/NavBar/NavBar';
// import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return <>
    <NavBar />
    <div className="container-all">
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  </>;
}

export default App;

