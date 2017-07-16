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
        //error del client ->response.payload.error
        if (!response.error) {
          //error del server ->response.payload.data.error
          if (!response.payload.data.error) {
            dispatch(actions.fetchUserDataSucces(response.payload.data));
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
