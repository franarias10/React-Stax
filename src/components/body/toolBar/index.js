import React, {Component} from 'react';
import './toolBar.css';
import img_open from '../../../img/open.png';
import img_close from '../../../img/close.png';
import { connect } from 'react-redux'; //<--- importamos el decorador connect para conectar el componente al Store
import actions from '../../../actions'; //<--- importamos las acciones para despacharlas al reducer

class toolBar extends Component{

  //método que maneja estado sideBar declaramos con fat arrow function para mantener el contexto
  openSideBar(){
  this.props.dispatch(actions.openSideBar());
  }

  autoCloseSideBar(){
    this.props.dispatch(actions.autoCloseSideBar());
  }

  render(){

      var toolBarClass = this.props.isOpen ? 'toolBar open' : 'toolBar';
      var stateMenu = this.props.isOpen ? 'stateMenu visible' : 'stateMenu';
      var iconMenu = this.props.isOpen ? 'iconMenu' : 'iconMenu visible';
      var imgIconMenu = this.props.isOpen ? img_close : img_open;

    return(
      <div className={toolBarClass} onMouseLeave={ () => this.autoCloseSideBar()}>
        <div onClick={() => this.openSideBar()}  className="icon_menu" >
          <img src={imgIconMenu}/>
        </div>
        <div className={stateMenu}>
          {this.props.menu.map(menu =>
            <div className="menu" onClick={()=>alert(menu.action)}>
              <div className="icon-menu">
                <img src={menu.icon}/>
              </div>
              <div className="text_menu">
                  {menu.name}
              </div>

            </div>
          )}
        </div>
        <div className={iconMenu}>
          {this.props.menu.map(icono =>
            <div className="icono" onClick={()=>alert(icono.action)}>
              <img src={icono.icon}/>
            </div>
          )}
        </div>

      </div>
    );
  }


}

  //conectamos el componente solo con los datos que necesitamos
  function mapStateToProps(state, props){
    return{
    isOpen:  state.uiReducer.sideBarOpen,
    menu: state.uiReducer.menuToolBar
    }
  }


export default connect(mapStateToProps)(toolBar);
