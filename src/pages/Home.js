import React, {Component}  from 'react';
import ModulesHomeContainer from '../containers/ModulesHomeContainer';
import HeaderContainer from '../containers/HeaderContainer';
class Home extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <ModulesHomeContainer />
      </div>  
    );
  }
}

export default Home;
