import { connect } from 'react-redux';
import Header from '../components/Header';

//Le pedimos al store solo los datos que necesitamos
function mapStateToProps(state, props){
  return{
    menuSuperior:  state.ui.menuSuperior, // -->le pedimos los datos al reducer de UI creado
    dataUser:  state.user.dataUser,
    inboxOpen: state.ui.inboxOpen
  }
}



export default connect(mapStateToProps)(Header);
