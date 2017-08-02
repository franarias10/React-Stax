import React, {Component} from 'react';
import './styles/global.css';

class TitleBarHeader extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <div className="title_bar">
            <div className="text_title_bar">
              <h4><b>{this.props.userName}</b> {this.props.title} </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default TitleBarHeader;
