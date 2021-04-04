import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Footer, Other } from './components';
import { HomeScreen } from './containers';

export default () => (
    <>
        <Header />
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/other" render={() => <Other name="Name and Title" title="Other Component" /> }/>
        </Switch>
        <Footer />
    </>
);
