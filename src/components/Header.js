import React, { Component } from 'react';
import {Collapse,Navbar,NavbarBrand,Nav,ButtonGroup,Button} from 'reactstrap';
import './styles/header.css';
import logo from '../img/logo.png';
import img_profile from '../img/img_profile.png';
import img_inbox from '../img/inbox_img.png';
import { Link } from 'react-router-dom';


class Header extends Component {


  render() {

      var open_inbox = this.props.inboxOpen ? 'open_inbox' : 'open_inbox close';

    return(
      <div>
        <Navbar className="header" light toggleable>
          <NavbarBrand href="/app">
            <img className="logo-header" src={logo}/>
          </NavbarBrand>
          <Collapse style={{width: '5%'}}  navbar>
            <Nav className="ml-auto" navbar>
              <div className="menu_superior">
                <ButtonGroup size="lg" style={{height: '100%'}}>
                  {this.props.menuSuperior.map(menu =>
                    <Link to={menu.action}>
                      <Button  active={menu.active} onClick={this.props.changeOpMenu.bind(null,menu.id)} >
                          <img src={menu.icon}/>
                          <div className="clearfix"></div>
                          <div className="txt_menu_sup">{menu.name}</div>
                        </Button>
                    </Link>
                  )}
                </ButtonGroup>
             </div>
             <div className="profileBox">
                   <div className="img_profile">
                     <img style={{width: "80%"}} src={img_profile}></img>
                   </div>
                   <div className="username">
                     {this.props.dataUser.userInfo.nombre}
                     { " " }
                     {this.props.dataUser.userInfo.apellido}
                   </div>
                   <div className="clearfix"></div>
                   <div className="inbox" onMouseOver={() => this.props.openInbox()} onClick={() => this.props.closeInbox()}>
                     <span className="num_inbox">{this.props.dataUser.inbox}</span>
                     <img style={{width:"30%"}} src={img_inbox}></img>
                   </div>
                   <div className={open_inbox} onMouseLeave={() => this.props.closeInbox()}>
                     Cargando...
                   </div>
                 </div>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}




export default Header;
