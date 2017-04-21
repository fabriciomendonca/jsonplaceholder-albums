import React, {Component} from 'react';

import Header from './header';
import Home from './home';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;