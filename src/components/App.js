import React, {Component} from 'react';
import Header from './header';
import Body from './body';
import icon6 from '../img/menu_ic6.png';
import icon7 from '../img/menu_ic7.png';
import icon8 from '../img/menu_ic8.png';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {

      MenuMobile: false,

      menuSuperior: [
        {id:1, name: "Home", icon: icon6,action: "opcion 1", active: true},
        {id:2, name: "Sección 2", icon: icon7,action: "opcion 2", active: false},
        {id:3, name: "Sección 3", icon: icon8,action: "opcion 3", active: false}
      ],

    };

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

  render() {
    return (
    <div>
      <Header  changeOpMenu={this.changeOpMenu} menuSuperior={this.state.menuSuperior}  menuMobileToggle = {this.menuMobileToggle} />
      <Body />
    </div>
    );
  }
}


export default App;
