import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <label htmlFor='bar'>bar</label>
        <input
          tyoe='text'
          onChange={() => {
            console.log('I am clicked');
          }}
        />
      </div>
    );
  }
}

export default App;
