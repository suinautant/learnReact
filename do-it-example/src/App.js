import React from 'react';
// import TodaysPlan from './03/TodaysPlan';
import MyComponent from './03/MyComponent';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <MyComponent name="message" />
      </div>
    );
  }
}

export default App;
