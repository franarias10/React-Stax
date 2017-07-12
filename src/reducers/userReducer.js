

//initial state of the APP
const initialState = {
  userInfo: {id:null,name:null, inbox:null}
}


function userReducer(state =  initialState, action = {}){
  switch (action.type ) {
    case 'fetch_user_data':
          return {...state, userInfo: action.userInfo}
      break;
    default:

  }
  return state;
}
export default userReducer;
