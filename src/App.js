import React from 'react';

function App() {
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

export default App;
