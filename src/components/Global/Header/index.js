import React, {Component, ProtoTypes} from 'react';
import {Collapse,Navbar,NavbarBrand,Nav,ButtonGroup,Button} from 'reactstrap';
import './header.css';
import logo from '../../../img/logo.png';
import ProfileBox from './profileBox';
import { connect } from 'react-redux'; //<--- importamos  connect para conectar el componente al Store
import actions from '../../../actions/ui';//<--- importamos las acciones para despacharlas al reducer
import { Link } from 'react-router-dom';


class Header extends Component {


  changeOpMenu = (id) =>{
    this.props.dispatch(actions.changeOpMenu(id));
  }


  render() {

    return(
      <div>
        <Navbar className="header" light toggleable>
          <NavbarBrand href="/">
            <img className="logo-header" src={logo}/>
          </NavbarBrand>
          <Collapse style={{width: '5%'}}  navbar>
            <Nav className="ml-auto" navbar>
              <div className="menu_superior">
                <ButtonGroup size="lg" style={{height: '100%'}}>
                  {this.props.menuSuperior.map(menu =>
                    <Link to={menu.action}>
                      <Button  active={menu.active} onClick={this.changeOpMenu.bind(null,menu.id)} >
                          <img className="icon_menu_sup" src={menu.icon}/>
                          <div className="clearfix"></div>
                          <div className="txt_menu_sup">{menu.name}</div>
                        </Button>
                    </Link>
                  )}
                </ButtonGroup>
             </div>
               <ProfileBox  />
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}

//Le pedimos al store solo los datos que necesitamos
function mapStateToProps(state, props){
  return{
  menuSuperior:  state.ui.menuSuperior // -->le pedimos los datos al reducer de UI creado
  }
}

export default connect(mapStateToProps)(Header);
