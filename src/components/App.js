//dependencies
import React, {Component} from 'react';

//components
import Header from './Global/Header';
import Content from './Global/Content';
//import Body from './body';

class App extends Component {

  render() {
    
    const { children } = this.props;

    return (
    <div>
      <Header />
      <Content body={children}/>
    </div>
    );
  }
}


export default App;
