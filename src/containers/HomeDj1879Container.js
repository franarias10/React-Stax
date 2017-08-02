import { connect } from 'react-redux';
import HomeDj1879 from '../components/Modules/Dj1879/HomeDj1879.js';
import actions from '../actions/user.js';


function mapStateToProps(state) {
  return {
      contribuyentes:  state.user.contribuyentes
  };
}


function mapDispatchToProps(dispatch){
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeDj1879);
