import { connect } from 'react-redux';
import ModulesHome from '../components/ModulesHome';


 function mapStateToProps(state, props){
   return{
     dataUser:  state.user.dataUser
   }
 }
export default connect(mapStateToProps)(ModulesHome);
