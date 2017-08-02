//dependencies
import React, {Component} from 'react';
import './styles/global.css';
import TitleBarHeader from './TitleBarHeader';
import { Button } from 'reactstrap';
import logo from '../img/logo.png';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './styles/cssReactTable.css';


class ViewContribuyente extends Component {

  //cargamos data de user solo si no se ha cargado antes...  si server devuelve false redirigir a pagina de login
  componentWillMount(){
      //this.props.fetchContribuyentes();
  }

  fetchInfoContribuyente(){
    const idContribuyente = this.props.idContribuyente;

      //console.log(idContribuyente);
      return(
        this.props.contribuyentes.data.filter(contribuyente =>
          contribuyente.id === idContribuyente
        ).map(contribuyente =>
          <ul>
            <li>Rut: {contribuyente.rut}</li>
            <li>Nombres: {contribuyente.nombres}</li>
            <li>Razón social o apellido paterno: {contribuyente.r_social_ap_paterno}</li>
            <li>Apellido Materno: {contribuyente.ap_materno}</li>
            <li>Mail: {contribuyente.mail}</li>
            <li>Telefono: {contribuyente.telefono}</li>
            <li>etc.....</li>
          </ul>
        )
      );

  }


  render() {


  return (
    <div className="contenido">
      <TitleBarHeader title="Contribuyentes / Contribuyente" />
      <div className="body_content">

          {this.fetchInfoContribuyente()}

      </div>

    </div>
    );
  }
}


export default ViewContribuyente;
