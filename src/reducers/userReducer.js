

//initial state of the APP
const initialState = {
  dataUser: {userInfo:{},loading:true,error:null, inbox: 0,licencias:[]},
  contribuyentes:{data:null,loading:true,error:null},
  //data contribuyentes

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
        //************change rzon_soc***********
        case 'edit_contribuyente':
        return Object.assign({}, state, {
          contribuyentes:{
            data: state.contribuyentes.data.map((contribuyente) => {
              if(contribuyente.id === action.payload.idContribuyente) {
                return Object.assign({}, contribuyente, {
                  r_social_ap_paterno: action.payload.infoEdited
                })
              }
              return contribuyente
            })
          }
        })
        break;
        //*****************************************
        //************change region***********
        case 'edit_region':
        return Object.assign({}, state, {
          contribuyentes:{
            data: state.contribuyentes.data.map((contribuyente) => {
              if(contribuyente.id === action.payload.idContribuyente) {
                return Object.assign({}, contribuyente, {
                  region: action.payload.infoEdited
                })
              }
              return contribuyente
            })
          }
        })
        break;
        //*****************************************
        //************change act_econ***********
        case 'edit_act_econ':
        return Object.assign({}, state, {
          contribuyentes:{
            data: state.contribuyentes.data.map((contribuyente) => {
              if(contribuyente.id === action.payload.idContribuyente) {
                return Object.assign({}, contribuyente, {
                  actividad: action.payload.infoEdited
                })
              }
              return contribuyente
            })
          }
        })
        break;
        //*****************************************
        //************change cod_act_econ***********
        case 'edit_cod_act_econ':
        return Object.assign({}, state, {
          contribuyentes:{
            data: state.contribuyentes.data.map((contribuyente) => {
              if(contribuyente.id === action.payload.idContribuyente) {
                return Object.assign({}, contribuyente, {
                  cod_act_econ: action.payload.infoEdited
                })
              }
              return contribuyente
            })
          }
        })
        break;
        //*****************************************


    default:

  }
  return state;
}
export default userReducer;
