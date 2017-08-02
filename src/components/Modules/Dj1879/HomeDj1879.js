//dependencies
import React, {Component} from 'react';
import '../../styles/global.css';
import TitleBarHeader from '../../TitleBarHeader';
import ToolBar from './toolBar';
import Content from './content';
import logo from '../../../img/logo.png';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../styles/cssReactTable.css';


class HomeDj1879 extends Component {

  //cargamos data de user solo si no se ha cargado antes...  si server devuelve false redirigir a pagina de login
  componentWillMount(){
      //this.props.fetchContribuyentes();
  }



  render() {

  return (
    <div className="contenido">
      <TitleBarHeader title="Módulo Dj1879" />
      <div className="body_content">
        <ToolBar />
        <Content />
      </div>

    </div>
    );
  }
}


export default HomeDj1879;
