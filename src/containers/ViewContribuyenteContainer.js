import { connect } from 'react-redux';
import ViewContribuyente from '../components/ViewContribuyente';
import actions from '../actions/user.js';


function mapStateToProps(state) {
  return {
      contribuyentes:  state.user.contribuyentes
  };
}


function mapDispatchToProps(dispatch){
  return {
    editContribuyente: (value,idContribuyente) => {
      dispatch(actions.editContribuyente(value,idContribuyente));
    }

  }
}





export default connect(mapStateToProps,mapDispatchToProps)(ViewContribuyente);
