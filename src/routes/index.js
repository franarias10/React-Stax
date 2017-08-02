
// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import App from '../pages/App';
import Home from '../pages/Home';
import Contribuyentes from '../pages/Contribuyentes';
import ViewContribuyente from '../pages/ViewContribuyente';
import CrearContribuyente from '../pages/CrearContribuyente';
import Dj1879 from '../pages/HomeDj1879';
import Page404 from '../pages/Page404';



const AppRoutes = () =>

<App>
<Switch>
  <Route exact path="/app" component={Home}/>
  <Route exact path="/app/contribuyentes" component={Contribuyentes} />
  <Route exact path="/app/contribuyentes/contribuyente/:id" component={ViewContribuyente} />
  <Route exact path="/app/contribuyentes/crear_contribuyente" component={CrearContribuyente} />
  <Route exact path="/app/dj1879" component={Dj1879} />
  <Route component={Page404} />
</Switch>
</App>


export default AppRoutes;
