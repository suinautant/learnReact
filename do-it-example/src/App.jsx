import React, { Component } from 'react';
import Example from './03/Input';

class App extends Component {
  render() {
    return (
      <div>
        <Example type="text" name="aaa" value="value" errorMessage="error msg" label="input box" />
      </div>
    );
  }
}

export default App;
