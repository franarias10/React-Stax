//dependencies
import React, {Component} from 'react';
import './styles/global.css';
import TitleBarHeader from './TitleBarHeader';
import imgDj1879 from '../img/imgDj1879.png';
import imgDj1847 from '../img/imgDj1847.png';
import { Link } from 'react-router-dom';


class ModulesHome extends Component {

  render() {

    //hacer esto por cada modulo creado
    const { nombre, apellido} = this.props.dataUser.userInfo;

    //si no hay modulos comprados por el usuario o activos
    let modulos = (
      <div>
        <h3>No Tiene ningún módulo activo.</h3>
      </div>
    );
    //si hay modulos los cargamos
    if (this.props.dataUser.licencias != null) {
     modulos =  this.props.dataUser.licencias.map( licencia =>
        {
          if (licencia.modulo === '1' && licencia.activa === '1') {
            return (
              <Link key={licencia.id} to="/dj1879">
                <div  className="img_module_soft">
                  <img src={imgDj1879} />
                </div>
              </Link>
            )
          }
          if (licencia.modulo === '2' && licencia.activa === '1') {
            return (
              <Link key={licencia.id} to="/dj1879">
                <div  className="img_module_soft">
                  <img src={imgDj1847} />
                </div>
              </Link>
            )
          }
        }
      );
    }



    return (
      <div className="contenido">
        <TitleBarHeader title=" ,tienes dispnibles los siguientes módulos:" userName={nombre} />
        <div className="body_content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                  {modulos}
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
}


export default ModulesHome;
