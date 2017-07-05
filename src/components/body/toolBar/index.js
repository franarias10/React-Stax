import React, {Component} from 'react';
import './toolBar.css';
import img_open from '../../../img/open.png';
import img_close from '../../../img/close.png';

class toolBar extends Component{

  render(){

      var toolBarClass = this.props.isOpen ? 'toolBar open' : 'toolBar';
      var stateMenu = this.props.isOpen ? 'stateMenu visible' : 'stateMenu';
      var iconMenu = this.props.isOpen ? 'iconMenu' : 'iconMenu visible';
      var imgIconMenu = this.props.isOpen ? img_close : img_open;

    return(
      <div className={toolBarClass} onMouseLeave={this.props.autoCloseSideBar}>
        <div onClick={this.props.openSideBar}  className="icon_menu" >
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

export default toolBar;
