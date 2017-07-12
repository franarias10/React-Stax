// import all icon that we will use
import icon1 from '../img/menu_ic1.png';
import icon2 from '../img/menu_ic2.png';
import icon3 from '../img/menu_ic3.png';
import icon4 from '../img/menu_ic4.png';
import icon5 from '../img/menu_ic5.png';
import icon6 from '../img/menu_ic6.png';
import icon7 from '../img/menu_ic7.png';
import icon8 from '../img/menu_ic8.png';


//initial state of the APP
const initialState = {
  inboxOpen:false,
  sideBarOpen: false,
  menuSuperior: [
    {id:1, name: "Home", icon: icon6,action: "/app", active: true},
    {id:2, name: "Contribuyentes", icon: icon7,action: "/app/contribuyentes", active: false},
    {id:3, name: "Sección 3", icon: icon8,action: "/app/ddjj", active: false}
  ],
  menuToolBar: [
    {name: "opcion 1", action: "accion1", icon: icon1},
    {name: "opcion 2", action: "accion2", icon: icon2},
    {name: "opcion 3", action: "accion3", icon: icon3},
    {name: "opcion 4", action: "accion4", icon: icon4},
    {name: "opcion 5", action: "accion5", icon: icon5}
  ]
}



function uiReducer(state =  initialState, action = {}){
  switch (action.type) {
    //********************toolbox Reducers****************************
    case 'open_sidebar':
      return {...state, sideBarOpen: !state.sideBarOpen}
      break;
    case 'close_sideBar':
      return {...state, sideBarOpen: false}
      break;
    //**************************************************************

    //*****header reducers******************************************
    case 'open_inbox':
      return {...state, inboxOpen: true}
      break;
    case 'close_inbox':
      return {...state, inboxOpen: !state.inboxOpen }
      break;
    case 'change_op_menu':
        return Object.assign({},state, {
          menuSuperior: state.menuSuperior.map(menu =>{
            if (action.id === menu.id) {
              menu.active = true;
              //alert(menu.action)
            }
            else{
              menu.active = false;
            }
            return menu;
          })
        })
        break;
    //*************************************************************
    default:
      return state;
  }
  return state;
}


export default uiReducer;
