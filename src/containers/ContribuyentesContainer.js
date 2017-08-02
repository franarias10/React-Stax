import { connect } from 'react-redux';
import Contribuyentes from '../components/Contribuyentes';
import actions from '../actions/user.js';


function mapStateToProps(state) {
  return {
      contribuyentes:  state.user.contribuyentes
  };
}


function mapDispatchToProps(dispatch){
  return {
    fetchContribuyentes: () => {
      //si usuario no ha iniciado session
      dispatch(actions.fetchContribuyentes()).then((response) => {
        if (response.payload.data === "0") {
          dispatch(actions.fetchUserDataError())
          return;
        }
        //error del client ->response.payload.error
        if (!response.error) {
          //error del server ->response.payload.data.error
          if (!response.payload.data.error) {
            dispatch(actions.fetchContribuyentesSucces(response.payload.data));
          }
          else{
            dispatch(actions.fetchContribuyentesError());
          }
        }
        else{
          dispatch(actions.fetchContribuyentesError())
        }

      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contribuyentes);
