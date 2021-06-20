import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBarContainer/NavBar';
import { ItemListContainer } from '../screens/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer';

export const Router = () => {
    return <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path="/">
                <ItemListContainer />
            </Route>
            <Route path="/tienda/:id">
                <ItemDetailContainer />
            </Route>
        </Switch>
    </BrowserRouter>
}