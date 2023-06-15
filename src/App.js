import React from 'react';
import PasswordGenerator from './PasswordGenerator';
import './password-generator.css'; // Import the CSS file

const App = () => {
  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <PasswordGenerator />
    </div>
  );
};

export default App;
