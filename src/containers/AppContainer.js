import { connect } from 'react-redux';
import App from '../components/App';
import actions from '../actions/user.js';


function mapStateToProps(state) {
  return {
      dataUser:  state.user.dataUser
  };
}


function mapDispatchToProps(dispatch){
  return {
    fetchUserData: () => {
      dispatch(actions.fetchUserData()).then((response) => {
        //si usuario no ha iniciado session
        if (response.payload.data === "0") {
            dispatch(actions.fetchUserDataError())
            return;
        }
        //error del client ->response.payload.error
        if (!response.error) {
            //error del server ->response.payload.data.error
            if (!response.payload.data.error) {
              dispatch(actions.fetchUserDataSucces(response.payload.data));
              //traemos las licencias de usuario
              dispatch(actions.fetchLicenciasUser()).then((response) => {
                //si usuario no ha iniciado session
                if (response.payload.data === "0") {
                    dispatch(actions.fetchLicenciasError())
                    return;
                }
                //error del client ->response.payload.error
                if (!response.error) {
                    //error del server ->response.payload.data.error
                    if (!response.payload.data.error) {
                      dispatch(actions.fetchLicenciasUserSucces(response.payload.data));
                    }
                    else{
                      dispatch(actions.fetchLicenciasError());
                    }
                }
                else{
                  dispatch(actions.fetchLicenciasError())
                }

              });
            }
            else{
              dispatch(actions.fetchUserDataError());
            }
        }
        else{
          dispatch(actions.fetchUserDataError())
        }

      });
    }

  }
}





export default connect(mapStateToProps, mapDispatchToProps)(App);
