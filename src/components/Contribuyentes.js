//dependencies
import React, {Component} from 'react';
import './styles/global.css';
import TitleBarHeader from './TitleBarHeader';
import { Button } from 'reactstrap';
import logo from '../img/logo.png';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './styles/cssReactTable.css';
import imgNewContr from '../img/new_contrib.png';
import { Link  } from 'react-router-dom';


class Contribuyentes extends Component {

  //cargamos data de contribuyentes solo si no se ha cargado antes
  componentDidMount(){
    if (this.props.contribuyentes.data === null ) {
      this.props.fetchContribuyentes();
    }

  }



  render() {

      //obtenemos la funcion push de history para poder hacer redireccionamiento
      var { push } = this.props.history;

      const { loading, error, data } = this.props.contribuyentes;

    if(loading) {
      return(
        <div>
          <div className="black_overlay_load" ></div>
          <div className="white_content_load" >
           <h3>Loading...</h3>
           <img src={logo}></img>
          </div>
        </div>
      );
    }
    else if(error) {
        return(
          <div>
            <div className="black_overlay_load" ></div>
            <div className="white_content_error" >
              <div className="alert alert-danger">Error: {error}</div>
            </div>
          </div>
        );
    }


    //si no hay contribuyentes en la DB
    if (data === null) {
      return(
        <div className="contenido">
          <TitleBarHeader title="Contribuyentes" />
          <div className="body_content">
              <div className="col-md-12">
                <div>
                  <BootstrapTable  search={ true }   data={ data } options={ { noDataText: 'No ha creado contribuyentes' }} pagination={true}>
                      <TableHeaderColumn  dataField='id' isKey={ true }  hidden>id</TableHeaderColumn>
                      <TableHeaderColumn columnClassName="filas"  dataField='rut'  dataSort={ true } >Rut</TableHeaderColumn>
                      <TableHeaderColumn columnClassName="filas"  dataField='rzon_social_o_nombre_completo'  dataSort={ true } >Nombre o razon social</TableHeaderColumn>

                  </BootstrapTable>
              </div>
           </div>
        </div>
      </div>
      );
    }

    //opciones de la table de contribuyentes
    const options = {
      onRowClick: function(row) {
        push('contribuyentes/contribuyente/'+row.id);
      },
      clearSearch: true,
      page: 1,  // which page you want to show as default
     sizePerPageList: [ {
       text: '5', value: 5
     }, {
       text: '10', value: 10
     }, {
       text: 'Todos', value: data.length
     } ], // you can change the dropdown list for size per page
     sizePerPage: 5,  // which size per page you want to locate as default
     pageStartIndex: 1, // where to start counting the pages
     paginationSize: 10,  // the pagination bar size.
     prePage: 'Prev', // Previous page button text
     nextPage: 'Next', // Next page button text
     firstPage: 'First', // First page button text
     lastPage: 'Last', // Last page button text
     paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
     //paginationPosition: 'top'  // default is bottom, top and both is all available
      //hideSizePerPage: true,  //You can hide the dropdown for sizePerPage
      alwaysShowAllBtns: true, // Always show next and previous button
      //withFirstAndLast: false  //Hide the going to First and Last page button
    };

  return (
    <div className="contenido">
      <TitleBarHeader title="Contribuyentes" />
      <div className="body_content">
          <div className="col-md-12">
            <div className="col-md-12">
              <Link to="/app/contribuyentes/crear_contribuyente" className="btn_new_contr">
                <Button active={true}>
                  <img src={imgNewContr} />
                  <b>Crear contribuyente</b>
                </Button>
              </Link>
            </div>
            <div>
              <BootstrapTable  search={ true }   data={ data } options={ options } pagination={true}>
                  <TableHeaderColumn  dataField='id' isKey={ true }  hidden>id</TableHeaderColumn>
                  <TableHeaderColumn columnClassName="filas"  dataField='rut'  dataSort={ true } >Rut</TableHeaderColumn>
                  <TableHeaderColumn columnClassName="filas"  dataField='rzon_social_o_nombre_completo'  dataSort={ true } >Nombre o razon social</TableHeaderColumn>
                  <TableHeaderColumn columnClassName="filas"  dataField='fecha_creacion'  dataSort={ true } >Fecha creación</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
      </div>

    </div>
    );
  }
}


export default Contribuyentes;
