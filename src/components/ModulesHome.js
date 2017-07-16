//dependencies
import React, {Component} from 'react';
import './styles/global.css';
class ModulesHome extends Component {

  //cargamos data de user solo si no se ha cargado antes...  si server devuelve false redirigir a pagina de login

  // componentWillMount(){
  //   if (this.props.userInfo['id'] === null ) {
  //     this.props.dispatch(actions.fetchUserData());
  //   }
  // }

  render() {

  return (
    <div className="contenido">
      <h2>Modulo home</h2>
    </div>
    );
  }
}


export default ModulesHome;
