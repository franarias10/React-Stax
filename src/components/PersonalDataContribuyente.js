//dependencies
import React, {Component} from 'react';
import './styles/global.css';
import TitleBarHeader from './TitleBarHeader';
import {Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import logo from '../img/logo.png';



class PersonalDataContribuyente extends Component {

  render() {
    //recogemos el id del contribuyente pasado como props
    const idContribuyente = this.props.idContribuyente;
    //funcion para editar contribuyente
    const editContribuyente = () =>{
      const rzon_soc = document.getElementById('rzon_soc').value;
      const ap_materno = document.getElementById('ap_materno').value;
      this.props.editContribuyente(ap_materno,rzon_soc,idContribuyente);
    }

    const onRegionChange = (e) =>{
      const value = e.target.value;
      this.props.onRegionChange(value,idContribuyente);
    }

    const onActEconChange = (e) =>{
      const value = e.target.value;
      this.props.onActEconChange(value,idContribuyente);
    }

    const onCodActEconChange = (e) =>{
      const value = e.target.value;
      this.props.onCodActEconChange(value,idContribuyente);
    }

  return (
    <div>
    {this.props.contribuyentes.data.filter(contribuyente =>
      contribuyente.id === idContribuyente
    ).map(contribuyente =>

     <div className="col-md-6">
         <FormGroup row style={{marginTop: '10px'}}>
           <Label  sm={4}>RUT</Label>
           <Col sm={8}>
             <Input type="text" name="rut" id="rut" value={contribuyente.rut} readOnly/>
           </Col>
         </FormGroup>
         <FormGroup row>
           <Label sm={4}>RAZÓN SOCIAL O APELLIDO PATERNO</Label>
           <Col sm={8}>
             <Input onChange={editContribuyente} maxLength="50" id="rzon_soc"   type="text" name="r_social_ap_pat"  placeholder="ingrese razón social o apellido paterno" defaultValue={contribuyente.r_social_ap_paterno} />
           </Col>
         </FormGroup>
         <FormGroup row>
           <Label sm={4}>APELLIDO MATERNO</Label>
           <Col sm={8}>
             <Input maxLength="50" type="text" name="ap_materno" id="ap_materno" placeholder="ingrese apellido materno" defaultValue={contribuyente.ap_materno} />
           </Col>
         </FormGroup>
         <FormGroup row>
           <Label sm={4}>NOMBRES</Label>
           <Col sm={8}>
             <Input maxLength="100" type="text" name="nombres" id="nombres" placeholder="ingrese nombres" defaultValue={contribuyente.nombres} />
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
             <Input type="number" name="telefono" id="telefono" placeholder="ingrese telefono" defaultValue={contribuyente.telefono} />
           </Col>
         </FormGroup>
         <FormGroup row>
           <Label sm={4}>TIPO DE CUENTA BANCARIA</Label>
           <Col sm={8}>
             <Input type="select" name="tpo_cuenta" id="tpo_cuenta">
             {
               this.props.tipo_cuenta_bancaria.filter(tpo_cta=>
                 tpo_cta.tipo === contribuyente.tpo_cuenta
               ).map(tpo_cta=>
                 <option key={tpo_cta.id} value={tpo_cta.tipo} Selected>{tpo_cta.tipo}</option>
               )
             }
             {
               this.props.tipo_cuenta_bancaria.filter(tpo_cta =>
                 tpo_cta.tipo !== contribuyente.tpo_cuenta
               ).map(tpo_cta =>
                 <option key={tpo_cta.id} value={tpo_cta.tipo}>{tpo_cta.tipo}</option>
               )
             }
             </Input>
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
             <Input type="number" name="nro_cuenta" id="nro_cuenta" placeholder="ingrese número de cuenta bancaria" defaultValue={contribuyente.nro_cuenta} />
           </Col>
         </FormGroup>
         <FormGroup row>
           <Label sm={4}>BANCO</Label>
           <Col sm={8}>
             <Input type="select" name="banco" id="banco" >
               <option value={contribuyente.banco}  selected>{contribuyente.banco}</option>
              {
                this.props.bancos.filter(banco =>
                  banco.nombre !== contribuyente.banco
                ).map(banco =>
                    <option key={banco.id} value={banco.nombre}>{banco.nombre}</option>
                )
              }

            </Input>
           </Col>
         </FormGroup>
         <FormGroup row>
           <Label sm={4}>REGIÓN</Label>
           <Col sm={8}>
             <Input type="select" name="region" id="region" onChange={onRegionChange}>

             {
               this.props.regiones.filter(region=>
                 region.codigo === contribuyente.region
               ).map(region=>
                 <option key={region.id} value={region.codigo} Selected>{region.nombre}</option>
               )
             }
             {
               this.props.regiones.filter(region =>
                 region.codigo !== contribuyente.region
               ).map(region =>
                 <option key={region.id} value={region.codigo}>{region.nombre}</option>
               )
             }
             </Input>
           </Col>
         </FormGroup>
         <FormGroup row>
           <Label sm={4}>COMUNA</Label>
           <Col sm={8}>
             <Input type="select" name="comuna" id="comuna">

             {
               this.props.comunas.filter(comuna =>
                 (comuna.nombre === contribuyente.comuna && comuna.cod_region === contribuyente.region)
               ).map(comuna =>
                 <option key={comuna.id} value={comuna.nombre} selected>{comuna.nombre}</option>
               )
             }
             {
               this.props.comunas.filter(comuna =>
                 (comuna.nombre !== contribuyente.comuna && comuna.cod_region === contribuyente.region)
               ).map(comuna =>
                 <option key={comuna.id} value={comuna.nombre}>{comuna.nombre}</option>
               )
             }
             </Input>
           </Col>
         </FormGroup>
         <FormGroup row>
           <Label sm={4}>DIRECCIÓN</Label>
           <Col sm={8}>
             <Input maxLength="50" type="text" name="direccion" id="direccion" placeholder="ingrese dirección" defaultValue={contribuyente.direccion} />
           </Col>
         </FormGroup>
         <FormGroup row>
           <Label sm={4}>ACTIVIDAD ECONOMICA</Label>
           <Col sm={8}>
             <Input type="select" name="actividad" id="actividad" onChange={onCodActEconChange}>
             {
               this.props.cod_act_econ.filter(cod =>
                 cod.codigo === contribuyente.cod_act_econ
               ).map(cod =>
                 <option key={cod.id} value={cod.codigo} selected>{cod.nombre}</option>
               )
             }
             {
               this.props.cod_act_econ.filter(cod =>
                 cod.codigo !== contribuyente.cod_act_econ
               ).map(cod =>
                 <option key={cod.id} value={cod.codigo}>{cod.nombre}</option>
               )
             }
             </Input>
           </Col>
         </FormGroup>
         <FormGroup row>
           <Label sm={4}>CÓDIGO ACTIVIDAD ECONÓMICA</Label>
           <Col sm={8}>
           <Input type="select" name="actividad" id="actividad" onChange={onCodActEconChange}>
           {
             this.props.cod_act_econ.filter(cod =>
               contribuyente.cod_act_econ === cod.codigo
             ).map(cod =>
               <option value={cod.codigo} key={cod.id} selected>{cod.codigo}</option>
             )
           }

           {
             this.props.cod_act_econ.filter(cod =>
               contribuyente.cod_act_econ !== cod.codigo
             ).map(cod =>
               <option key={'cod'+cod.id} value={cod.codigo}>{cod.codigo}</option>
             )
           }
           </Input>
           </Col>
         </FormGroup>
         <FormGroup row>
           <Label sm={4}>CLAVE DE ACCESO SII</Label>
           <Col sm={8}>
             <Input type="password" name="clave_sii" id="clave_sii" placeholder="ingrese clave del SII" defaultValue={contribuyente.clave_sii} />
           </Col>
         </FormGroup>
         <FormGroup row>
             <Col sm={4}></Col>
             <Col sm={4}> </Col>
             <Col sm={4}>
              <input onClick={editContribuyente} type="button" value="GUARDAR" className="btn btn-secondary active" style={{fontWeight: 'bold',position: 'relative',float:'right'}} />
             </Col>
         </FormGroup>
    </div>
  )}
    </div>
    );
  }
}


export default PersonalDataContribuyente;
