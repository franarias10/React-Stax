import React, {Component} from 'react';

import Header from './header';
import Body from './body';
import icon1 from '../img/menu_ic1.png';
import icon2 from '../img/menu_ic2.png';
import icon3 from '../img/menu_ic3.png';
import icon4 from '../img/menu_ic4.png';
import icon5 from '../img/menu_ic5.png';
import icon6 from '../img/menu_ic6.png';
import icon7 from '../img/menu_ic7.png';
import icon8 from '../img/menu_ic8.png';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      inboxOpen:false,
      MenuMobile: false,
      sideBarOpen: false,
      menu: [
        {name: "opcion 1", action: "accion1", icon: icon1},
        {name: "opcion 2", action: "accion2", icon: icon2},
        {name: "opcion 3", action: "accion3", icon: icon3},
        {name: "opcion 4", action: "accion4", icon: icon4},
        {name: "opcion 5", action: "accion5", icon: icon5}
      ],
      menuSuperior: [
        {id:1, name: "Sección 1", icon: icon6,action: "opcion 1", active: true},
        {id:2, name: "Sección 2", icon: icon7,action: "opcion 2", active: false},
        {id:3, name: "Sección 3", icon: icon8,action: "opcion 3", active: false}
      ],
      userInfo: {id:1,name:"Francisco Arias", inbox:10}
    };

  }

  //método que maneja estado sideBar declaramos con fat arrow function para mantener el contexto
  openSideBar= () =>{
    this.setState({
      sideBarOpen: !this.state.sideBarOpen
    });
  }

  autoCloseSideBar = () =>{
    this.setState({
      sideBarOpen: false
    });
  }
  changeOpMenu = (id) =>{
    this.setState({
      menuSuperior: this.state.menuSuperior.map(menu =>{
        if (id === menu.id) {
          menu.active = true;
          alert(menu.action)
        }
        else{
          menu.active = false;
        }
        return menu;
      })
    });
  }

  openInbox = () =>{
    this.setState({
      inboxOpen: true
    });
  }

  closeInbox = () =>{
    this.setState({
      inboxOpen: !this.state.inboxOpen
    });
  }



  render() {
    return (
    <div>
      <Header userInfo={this.state.userInfo} closeInbox={this.closeInbox} openInbox={this.openInbox} inboxOpen={this.state.inboxOpen}  changeOpMenu={this.changeOpMenu} menuSuperior={this.state.menuSuperior}  menuMobileToggle = {this.menuMobileToggle} />
      <Body autoCloseSideBar={this.autoCloseSideBar} menu={this.state.menu} openSideBar={this.openSideBar} sideBarOpen={this.state.sideBarOpen} />
    </div>
    );
  }
}


export default App;
