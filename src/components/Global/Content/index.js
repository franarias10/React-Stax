// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import {connect} from 'react-redux';
import actions from '../../../actions/user'

class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  //cargamos data de user solo si no se ha cargado antes...  si server devuelve false redirigir a pagina de login
  componentWillMount(){
    if (this.props.userInfo['id'] === null ) {
      this.props.dispatch(actions.fetchUserData());
      //alert('se cargo data de user');
    }



  }

  componentWillUnmount(){
    console.log('componente body fue desmontado');
  }

  render() {
    const { body } = this.props;

    return (
      <Container style={{width:"100%"}}>
        {body}
      </Container>
    );
  }
}

function mapStateToProps(state, props){
  return{
      userInfo : state.user.userInfo
  }

}

export default connect(mapStateToProps)(Content);
