

//initial state of the APP
const initialState = {
  dataUser: {userInfo:{},loading:true,error:null, inbox: 0,licencias:[]},
  contribuyentes:{data:null,loading:true,error:null}
}


function userReducer(state =  initialState, action = {}){

  switch (action.type ) {
    //*********data user******************
      case 'fetch_user_data':
          return {...state, dataUser: { userInfo:{},loading:true,error:null, inbox: 0 }}
      break;
      case 'fetch_user_data_succes':
          return {...state, dataUser: {userInfo: action.payload, loading: true, error: null, inbox: 34}}
      break;
      case 'fetch_user_data_error':
          return {...state, dataUser: {userInfo: {}, loading: false, error: action.payload, inbox: 0}}
      break;
      //*********licencias usuario*************
        case 'fetch_licencias_user':
            return {...state, dataUser:{...state.dataUser, loading:true}}
        break;
        case 'fetch_licencias_user_succes':
            return {...state, dataUser:{...state.dataUser,loading:false, licencias: action.payload.records}}
        break;
        case 'fetch_licencias_user_error':
            return {...state, dataUser: {userInfo: {}, loading: false, error: action.payload, inbox: 0}}
        break;
      //*******data contribuyentes**********
        case 'fetch_contribuyentes':
            return {...state, contribuyentes: { data:{},loading:true,error:null }}
        break;
        case 'fetch_contribuyentes_succes':
            return {...state, contribuyentes: {data: action.payload.records, loading: false, error: null}}
        break;
        case 'fetch_contribuyentes_error':
            return {...state, contribuyentes: {data: {}, loading: false, error: action.payload}}
        break;


    default:

  }
  return state;
}
export default userReducer;
