import React from 'react';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Checkout from './components/Checkout';
import Dashboard from './components/Dashboard';
import Unidades from './components/Unidades';
import Pessoas from './components/Pessoas';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={SignIn} />
        <Route path='/register' component={Register} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/pessoas' component={Pessoas} />
        <Route path='/unidades' component={Unidades} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </BrowserRouter>)
    ;
}

export default App;