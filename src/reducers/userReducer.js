

//initial state of the APP
const initialState = {
  dataUser: {userInfo:{},loading:true,error:null, inbox: 0}
}


function userReducer(state =  initialState, action = {}){

  switch (action.type ) {
    case 'fetch_user_data':
          return {...state, dataUser: { userInfo:{},loading:true,error:null, inbox: 0 }}
      break;
      case 'fetch_user_data_succes':
          return {...state, dataUser: {userInfo: action.payload, loading: false, error: null, inbox: 34}}
        break;
      case 'fetch_user_data_error':
          return {...state, dataUser: {userInfo: {}, loading: false, error: action.payload, inbox: 0}}
        break;

    default:

  }
  return state;
}
export default userReducer;
