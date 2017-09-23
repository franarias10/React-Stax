import { connect } from 'react-redux';
import PersonalDataContribuyente from '../components/PersonalDataContribuyente';
import actions from '../actions/user.js';


function mapStateToProps(state) {
  return {
      contribuyentes:  state.user.contribuyentes,
      bancos: state.user.bancos,
      comunas: state.user.comunas,
      regiones: state.user.regiones,
      cod_act_econ: state.user.cod_act_econ,
      tipo_cuenta_bancaria: state.user.tpo_cta
  };
}


function mapDispatchToProps(dispatch){
  return {
    editContribuyente: (ap_materno,rzon_soc,idContribuyente) => {
      dispatch(actions.editContribuyente(ap_materno,rzon_soc,idContribuyente));
    },
    onRegionChange: (value,idContribuyente) => {
      dispatch(actions.onRegionChange(value,idContribuyente));
    },
    onActEconChange: (value,idContribuyente) => {
      dispatch(actions.onActEconChange(value,idContribuyente));
    },
    onCodActEconChange: (value,idContribuyente) => {
      dispatch(actions.onCodActEconChange(value,idContribuyente));
    }

  }
}





export default connect(mapStateToProps,mapDispatchToProps)(PersonalDataContribuyente);
