import { connect } from 'react-redux';
import ViewContribuyente from '../components/ViewContribuyente';
import actions from '../actions/user.js';


function mapStateToProps(state) {
  return {
      contribuyentes:  state.user.contribuyentes,
      bancos: state.user.bancos,
      comunas: state.user.comunas,
      regiones: state.user.regiones,
      cod_act_econ: state.user.cod_act_econ
  };
}


function mapDispatchToProps(dispatch){
  return {
    onRazonSocChange: (value,idContribuyente) => {
      dispatch(actions.onRazonSocChange(value,idContribuyente));
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





export default connect(mapStateToProps,mapDispatchToProps)(ViewContribuyente);
