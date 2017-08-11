//dependencies
import React, {Component} from 'react';
import './styles/global.css';
import TitleBarHeader from './TitleBarHeader';
import {Col, Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import logo from '../img/logo.png';



class ViewContribuyente extends Component {



  //cargamos data de user solo si no se ha cargado antes...  si server devuelve false redirigir a pagina de login
  componentDidMount(){
      //this.props.fetchContribuyentes();
  }


  fetchInfoContribuyente(){
    const idContribuyente = this.props.idContribuyente;
    //funcion para editar contribuyente
    const editContribuyente = (e) =>{
      const value = e.target.value;
      this.props.editContribuyente(value,idContribuyente);
    }

      return(
        this.props.contribuyentes.data.filter(contribuyente =>
          contribuyente.id === idContribuyente
        ).map(contribuyente =>

         <Form className="col-md-6">
             <FormGroup row>
               <Label  sm={4}>RUT</Label>
               <Col sm={8}>
                 <Input type="text" name="rut" id="rut" value={contribuyente.rut} readonly/>
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>RAZÓN SOCIAL O APELLIDO PATERNO</Label>
               <Col sm={8}>
                 <Input onBlur={editContribuyente} type="text" name="r_social_ap_pat" id="r_social_ap_pat" placeholder="ingrese razón social o apellido paterno" defaultValue={contribuyente.r_social_ap_paterno} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>APELLIDO MATERNO</Label>
               <Col sm={8}>
                 <Input type="text" name="ap_materno" id="ap_materno" placeholder="ingrese apellido materno" defaultValue={contribuyente.ap_materno} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>NOMBRES</Label>
               <Col sm={8}>
                 <Input type="text" name="nombres" id="nombres" placeholder="ingrese nombres" defaultValue={contribuyente.nombres} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>MAIL</Label>
               <Col sm={8}>
                 <Input type="email" name="mail" id="mail" placeholder="ingrese mail" defaultValue={contribuyente.mail} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>TELEFONO</Label>
               <Col sm={8}>
                 <Input type="text" name="telefono" id="telefono" placeholder="ingrese telefono" defaultValue={contribuyente.telefono} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>TIPO DE CUENTA BANCARIA</Label>
               <Col sm={8}>
                 <Input type="text" name="tpo_cuenta" id="tpo_cuenta" placeholder="ingrese tipo de cuenta bancaria" defaultValue={contribuyente.tpo_cuenta} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>RUT REPRESENTANTE</Label>
               <Col sm={8}>
                 <Input type="text" name="rut_representante" id="rut_representante" placeholder="ingrese rut del representante" defaultValue={contribuyente.rut_representante} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>RUT DEL CONTADOR</Label>
               <Col sm={8}>
                 <Input type="text" name="rut_contador" id="rut_contador" placeholder="ingrese rut del contador" defaultValue={contribuyente.rut_contador} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>NRO DE CUENTA</Label>
               <Col sm={8}>
                 <Input type="text" name="nro_cuenta" id="nro_cuenta" placeholder="ingrese número de cuenta bancaria" defaultValue={contribuyente.nro_cuenta} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>BANCO</Label>
               <Col sm={8}>
                 <Input type="text" name="banco" id="banco" placeholder="ingrese banco" defaultValue={contribuyente.banco} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>COMUNA</Label>
               <Col sm={8}>
                 <Input type="text" name="comuna" id="comuna" placeholder="ingrese comuna" defaultValue={contribuyente.comuna} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>ACTIVIDAD ECONOMICA</Label>
               <Col sm={8}>
                 <Input type="text" name="actividad" id="actividad" placeholder="ingrese actividad económica" defaultValue={contribuyente.actividad} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>CÓDIGO ACTIVIDAD ECONÓMICA</Label>
               <Col sm={8}>
                 <Input type="text" name="cod_act_econ" id="cod_act_econ" placeholder="ingrese código actividad económica" defaultValue={contribuyente.cod_act_econ} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>REGIÓN</Label>
               <Col sm={8}>
                 <Input type="text" name="region" id="region" placeholder="ingrese región" defaultValue={contribuyente.region} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>DIRECCIÓN</Label>
               <Col sm={8}>
                 <Input type="text" name="direccion" id="direccion" placeholder="ingrese dirección" defaultValue={contribuyente.direccion} />
               </Col>
             </FormGroup>
             <FormGroup row>
               <Label sm={4}>CLAVE DE ACCESO SII</Label>
               <Col sm={8}>
                 <Input type="password" name="clave_sii" id="clave_sii" placeholder="ingrese clave del SII" defaultValue={contribuyente.clave_sii} />
               </Col>
             </FormGroup>

            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
        </Form>
        )
      );

  }


  render() {

  return (
    <div className="contenido">
      <TitleBarHeader title="Contribuyentes / Contribuyente" />
      <div className="body_content">
         <div className="form-container">
           {this.fetchInfoContribuyente()}
         </div>
      </div>
    </div>
    );
  }
}


export default ViewContribuyente;
