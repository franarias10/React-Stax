import { connect } from 'react-redux';
import Header from '../components/Header';
import uiActions from '../actions/ui';

//Le pedimos al store solo los datos que necesitamos
function mapStateToProps(state, props){
  return{
    menuSuperior:  state.ui.menuSuperior, // -->le pedimos los datos al reducer de UI creado
    dataUser:  state.user.dataUser,
    inboxOpen: state.ui.inboxOpen
  }
}


//funcion para pasar los dispatch como props al componente
function mapDispatchToProps(dispatch){
  return{
    changeOpMenu : (id) =>{
      dispatch(uiActions.changeOpMenu(id))
    },
    openInbox: () =>{
      dispatch(uiActions.openInbox())
    },
    closeInbox: () =>{
      dispatch(uiActions.closeInbox())
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
