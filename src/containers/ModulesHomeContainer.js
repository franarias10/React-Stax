import { connect } from 'react-redux';
import ModulesHome from '../components/ModulesHome';


// function mapStateToProps(state, props){
//   return{
//     isOpen:  state.ui.sideBarOpen
//   }
// }
export default connect()(ModulesHome);
