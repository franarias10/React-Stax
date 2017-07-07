import React, {Component} from 'react';
import './profileBox.css';
import img_profile from '../../../img/img_profile.png';
import img_inbox from '../../../img/inbox_img.png';
import { connect } from 'react-redux'; //<--- importamos el decorador connect para conectar el componente al Store
import actions from '../../../actions';//<--- importamos las acciones para despacharlas al reducer

class profileBox extends Component{

  openInbox(){
  this.props.dispatch(actions.openInbox());
  }

  closeInbox(){
    this.props.dispatch(actions.closeInbox());
  }

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
            <div className="inbox" onMouseOver={() => this.openInbox()} onClick={() => this.closeInbox()}>
              <span className="num_inbox">{this.props.userInfo.inbox}</span>
              <img style={{width:"30%"}} src={img_inbox}></img>
            </div>
            <div className={open_inbox} onMouseLeave={() => this.closeInbox()}>
              Cargando...
            </div>
          </div>
    );
  }
}

//conectamos el componente solo con los datos que necesitamos
function mapStateToProps(state, props){
  return{
  userInfo:  state.userInfo,
  inboxOpen: state.inboxOpen
  }
}


export default connect(mapStateToProps)(profileBox);
