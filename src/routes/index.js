
// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import App from '../pages/App';
import Home from '../pages/Home';
import Contribuyentes from '../pages/Contribuyentes';
import DDJJ from '../components/DDJJ';
import Page404 from '../pages/Page404';




const AppRoutes = () =>

<App>
<Switch>
  <Route exact path="/app" component={Home}/>
  <Route exact path="/app/ddjj" component={DDJJ} />
  <Route exact path="/app/contribuyentes" component={Contribuyentes} />
  <Route component={Page404} />
</Switch>  
</App>


export default AppRoutes;
