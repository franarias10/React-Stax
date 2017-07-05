import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import ToolBar from './toolBar';
import Content from './content';

class Body extends Component{
  render(){

    return(
      <Container style={{width:"100%"}}>
        <ToolBar autoCloseSideBar={this.props.autoCloseSideBar} menu={this.props.menu} openSideBar={this.props.openSideBar} isOpen={this.props.sideBarOpen} />
        <Content isOpen={this.props.sideBarOpen}/>
      </Container>
    );
  }
}

export default Body;
