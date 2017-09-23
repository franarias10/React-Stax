import React, {Component}  from 'react';
//import ContribuyentesContainer from '../containers/ContribuyentesContainer';
import HeaderContainer from '../containers/HeaderContainer';
import ViewContribuyenteComponent from '../components/ViewContribuyente';

class ViewContribuyente extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <ViewContribuyenteComponent idContribuyente={this.props.match.params.id}  />
      </div>
    );
  }
}
export default ViewContribuyente;
