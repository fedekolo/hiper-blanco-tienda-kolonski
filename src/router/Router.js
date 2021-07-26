import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBarContainer/NavBar';
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer';
import { HomeContainer } from '../screens/HomeContainer/HomeContainer';
import { CartContainer } from '../screens/CartContainer/CartContainer';

export const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <NavBar isInicio={true} />
                <HomeContainer />
            </Route>
            <Route path="/cart">
                <NavBar isInicio={false} />
                <CartContainer />
            </Route>
            <Route path="/item/:id">
                <NavBar isInicio={false} />
                <ItemDetailContainer />
            </Route>
            <Route path="/category/:catId">
                <NavBar isInicio={true} />
                <HomeContainer />
            </Route>
        </Switch>
    </BrowserRouter>
}