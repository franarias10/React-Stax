//dependencies
import React, {Component} from 'react';
import './styles/global.css';
import Iframe from 'react-iframe';
import TitleBarHeader from './TitleBarHeader';

class CrearContribuyente extends Component {

  render() {

  return (
    <div className="contenido">
      <TitleBarHeader title="Contribuyentes / Crear Contribuyente" />
      <div className="body_content crear_contr">
        <Iframe
          url="http://www.softax.cl/nuevo_contribuyente"
          width="100%"
          height="100%"
          display="initial"
          position="relative"
          allowFullScreen/>
      </div>

    </div>
    );
  }
}


export default CrearContribuyente;
