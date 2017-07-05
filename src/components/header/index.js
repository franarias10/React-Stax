import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  ButtonGroup,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './header.css';
import logo from '../../img/logo.png';
import ProfileBox from './profileBox';




class Header extends Component {


  render() {

    return(
      <div>
        <Navbar className="header" light toggleable>
          <NavbarBrand href="/">
            <img className="logo-header" src={logo}/>
          </NavbarBrand>
          <Collapse style={{width: '5%'}} isOpen={this.props.MenuMobile} navbar>
            <Nav className="ml-auto" navbar>
              <div className="menu_superior">
                <ButtonGroup size="lg" style={{height: '100%'}}>
                  {this.props.menuSuperior.map(menu =>
                    <Button active={menu.active} onClick={this.props.changeOpMenu.bind(null,menu.id)} >
                      <img className="icon_menu_sup" src={menu.icon}/>
                      <div className="clearfix"></div>
                      <div className="txt_menu_sup">{menu.name}</div>
                    </Button>
                  )}
                </ButtonGroup>
             </div>
               <ProfileBox userInfo={this.props.userInfo} openInbox={this.props.openInbox}  inboxOpen={this.props.inboxOpen} closeInbox={this.props.closeInbox} />
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}

export default Header;
