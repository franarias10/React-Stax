//dependencies
import React, {Component} from 'react';
import './styles/global.css';
import TitleBarHeader from './TitleBarHeader';
import {Col, Button, Form, FormGroup, Label, Input, FormText, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row  } from 'reactstrap';
import classnames from 'classnames';
import logo from '../img/logo.png';
import PersonalDataContribuyenteContainer   from '../containers/PersonalDataContribuyenteContainer';



class ViewContribuyente extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {

  return (
    <div className="contenido">
      <TitleBarHeader title="Contribuyentes / Contribuyente" />
      <div className="body_content">
         <div className="form-container">
            <Nav tabs>
                <NavItem>
                  <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }} style={{cursor: 'pointer'}}>
                    Datos Personales
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }} style={{cursor: 'pointer'}}>
                    Declaraciones Juradas realizadas
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <PersonalDataContribuyenteContainer idContribuyente={this.props.idContribuyente}/>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="6">
                      <Card block>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card block>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>

         </div>
      </div>
    </div>
    );
  }
}


export default ViewContribuyente;
