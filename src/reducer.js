
//iconos de toolBar y menu
import icon1 from './img/menu_ic1.png';
import icon2 from './img/menu_ic2.png';
import icon3 from './img/menu_ic3.png';
import icon4 from './img/menu_ic4.png';
import icon5 from './img/menu_ic5.png';


//estado inicial de la APP
const initialState = {
  inboxOpen:false,
  sideBarOpen: false,
  menuToolBar: [
    {name: "opcion 1", action: "accion1", icon: icon1},
    {name: "opcion 2", action: "accion2", icon: icon2},
    {name: "opcion 3", action: "accion3", icon: icon3},
    {name: "opcion 4", action: "accion4", icon: icon4},
    {name: "opcion 5", action: "accion5", icon: icon5}
  ],
  userInfo: {id:1,name:"Francisco Arias", inbox:10}
}



function reducer(state =  initialState, action = {}){
  switch (action.type) {
    //********************toolbox Reducers****************************
    case 'open_sidebar':
      return Object.assign({}, state, {sideBarOpen: !state.sideBarOpen})
      break;
    case 'close_sideBar':
      return Object.assign({}, state, {sideBarOpen: false})
      break;
    //**************************************************************

    //*****header reducers******************************************
    case 'open_inbox':
      return Object.assign({},state, {inboxOpen: true})
      break;
    case 'close_inbox':
      return Object.assign({},state, {inboxOpen: !state.inboxOpen})
      break;
    //*************************************************************
    default:
      return state;
  }
  return state;
}


export default reducer;
