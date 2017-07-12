
// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from '../components/App';
import Home from '../components/Home';
import Page404 from '../components/Page404';
import DDJJ from '../components/DDJJ';
import Contribuyentes from '../components/Contribuyentes';
//import Page404 from './components/Page404';



const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/app"   component={Home}  />
      <Route exact path="/app/ddjj" component={DDJJ} />
      <Route exact path="/app/contribuyentes" component={Contribuyentes} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
