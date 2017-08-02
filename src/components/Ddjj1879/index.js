import React, {Component} from 'react';
import { Container} from 'reactstrap';
import ToolBar from './toolBar';
import Content from './content';

class Body extends Component{
  render(){
    return(
      <Container style={{width:"100%"}}>
        <ToolBar />
        <Content />
      </Container>
    );
  }
}

export default Body;
