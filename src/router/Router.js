import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBarContainer/NavBar';
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer';
import { HomeContainer } from '../screens/HomeContainer/HomeContainer';

export const Router = () => {
    return <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path="/">
                <HomeContainer />
            </Route>
            <Route path="/tienda">
                <HomeContainer />
            </Route>
            <Route path="/categorias">
                <HomeContainer />
            </Route>
            <Route path="/local">
                <HomeContainer />
            </Route>
            <Route path="/contacto">
                <HomeContainer />
            </Route>
            <Route path="/item/:id">
                <ItemDetailContainer />
            </Route>
            <Route path="/category/:catId">
                <HomeContainer />
            </Route>
        </Switch>
    </BrowserRouter>
}