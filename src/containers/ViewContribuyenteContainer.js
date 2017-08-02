import { connect } from 'react-redux';
import ViewContribuyente from '../components/ViewContribuyente';
//import actions from '../actions/user.js';


function mapStateToProps(state) {
  return {
      contribuyentes:  state.user.contribuyentes
  };
}



export default connect(mapStateToProps)(ViewContribuyente);
