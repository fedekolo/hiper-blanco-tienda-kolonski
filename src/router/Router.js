import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBarContainer/NavBar';
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer';
import { HomeContainer } from '../screens/HomeContainer/HomeContainer';
import { CartContainer } from '../screens/CartContainer/CartContainer';
import { RegisterContainer } from '../screens/UserContainer/Register/RegisterContainer';
import { LoginContainer } from '../screens/UserContainer/Login/LoginContainer';
// import React,{ useContext } from 'react';
// import { UserContext } from '../context/UserContext';

export const Router = () => {
    // const user = useContext(UserContext);

    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <NavBar />
                <HomeContainer />
            </Route>
            <Route path="/cart">
                <NavBar />
                <CartContainer />
            </Route>
            <Route path="/item/:id">
                <NavBar />
                <ItemDetailContainer />
            </Route>
            <Route path="/category/:catId">
                <NavBar />
                <HomeContainer />
            </Route>
            <Route path="/singup">
                <NavBar />
                <RegisterContainer />
            </Route>
            <Route path="/singin">
                <NavBar />
                <LoginContainer />
            </Route>
            <Route path="/profile">
                <NavBar />
                <h1>Perfil</h1>
            </Route>
            <Route path="/orders">
                <NavBar />
                <h1>Compras</h1>
            </Route>
        </Switch>
    </BrowserRouter>
}