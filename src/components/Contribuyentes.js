//dependencies
import React, {Component} from 'react';
import './styles/global.css';
import Iframe from 'react-iframe'

class Contribuyentes extends Component {

  //cargamos data de user solo si no se ha cargado antes...  si server devuelve false redirigir a pagina de login

  // componentWillMount(){
  //   if (this.props.userInfo['id'] === null ) {
  //     this.props.dispatch(actions.fetchUserData());
  //   }
  // }

  render() {

  return (
    <div className="contenido">
      <h2>Modulo Contribuyentes</h2>
      <Iframe url="http://www.softax.cl/nuevo_contribuyente"
        width="100%"
        height="100%"
        display="initial"
        position="relative"
        allowFullScreen/>
    </div>
    );
  }
}


export default Contribuyentes;
