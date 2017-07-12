import React, {Component} from 'react';
import './content.css';
import { connect } from 'react-redux';

class content extends Component{
  render(){
    var contentClass = this.props.isOpen ? 'content open' : 'content';
    return(
      <div className={contentClass}>Acá va todo el contenido</div>
    );
  }
}


function mapStateToProps(state, props){
  return{
    isOpen:  state.ui.sideBarOpen
  }
}

export default connect(mapStateToProps)(content);
