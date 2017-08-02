//dependencies
import React, {Component} from 'react';
import './styles/global.css';
import './styles/App.css';
import logo from '../img/logo.png';

class App extends Component {

  //cargamos data de user solo si no se ha cargado antes...  si server devuelve false redirigir a pagina de login
  componentWillMount(){

    if (this.props.dataUser.userInfo = {} ) {
      this.props.fetchUserData();
    }
  }


  render() {
    const { loading,error } = this.props.dataUser;

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
            <div className="alert alert-danger">Error: {error}</div>
          </div>
        );
    }

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}


export default App;
