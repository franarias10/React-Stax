import React, {Component}  from 'react';
//import ContribuyentesContainer from '../containers/ContribuyentesContainer';
import HeaderContainer from '../containers/HeaderContainer';
import ViewContribuyenteContainer from '../containers/ViewContribuyenteContainer';

class ViewContribuyente extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <ViewContribuyenteContainer idContribuyente={this.props.match.params.id}  />

      </div>
    );
  }
}
export default ViewContribuyente;
