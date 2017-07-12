import React, {Component} from 'react';
import './home.css';
import { connect} from 'react-redux';

class content extends Component{


  render(){
    return(
      <div className="contenido">
        <h2>Modulo home</h2>
      </div>
    );
  }
}


function mapStateToProps(state, props){
  return{
    isOpen:  state.ui.sideBarOpen
  }
}

export default connect(mapStateToProps)(content);
