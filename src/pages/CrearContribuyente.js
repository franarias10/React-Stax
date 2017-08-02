import React, {Component}  from 'react';
import CrearContribuyenteContainer from '../containers/CrearContribuyenteContainer';
import HeaderContainer from '../containers/HeaderContainer';

class CrearContribuyente extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <CrearContribuyenteContainer />
      </div>
    );
  }
}

export default CrearContribuyente;
