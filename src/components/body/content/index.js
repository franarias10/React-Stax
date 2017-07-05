import React, {Component} from 'react';
import './content.css';

class content extends Component{
  render(){
    var contentClass = this.props.isOpen ? 'content open' : 'content';
    return(
      <div className={contentClass}>Acá va todo el contenido</div>
    );
  }
}

export default content;
