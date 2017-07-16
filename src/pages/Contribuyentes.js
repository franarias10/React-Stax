import React, {Component}  from 'react';
import ContribuyentesContainer from '../containers/ContribuyentesContainer';
import HeaderContainer from '../containers/HeaderContainer';

class Contribuyentes extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <ContribuyentesContainer />
      </div>
    );
  }
}

export default Contribuyentes;
