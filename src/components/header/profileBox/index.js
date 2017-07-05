import React, {Component} from 'react';
import './profileBox.css';
import img_profile from '../../../img/img_profile.png';
import img_inbox from '../../../img/inbox_img.png';

class profileBox extends Component{
  render(){
    var open_inbox = this.props.inboxOpen ? 'open_inbox' : 'open_inbox close';
    return(
      <div className="profileBox">
            <div className="img_profile">
              <img style={{width: "80%"}} src={img_profile}></img>
            </div>
            <div className="username">
              {this.props.userInfo.name}
            </div>
            <div className="clearfix"></div>
            <div className="inbox" onMouseOver={this.props.openInbox} onClick={this.props.closeInbox}>
              <span className="num_inbox">{this.props.userInfo.inbox}</span>
              <img style={{width:"30%"}} src={img_inbox}></img>
            </div>
            <div className={open_inbox} onMouseLeave={this.props.closeInbox}>
              Cargando...
            </div>
          </div>
    );
  }
}
export default profileBox;
