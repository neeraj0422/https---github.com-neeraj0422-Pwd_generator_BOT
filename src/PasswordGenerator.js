import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [showGif, setShowGif] = useState(false);

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=<>?';

    let validChars = '';
    if (includeLowercase) validChars += lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }

    setPassword(generatedPassword);
    setShowGif(true);
  };

  return (
    <div className="password-generator">
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          Include Lowercase Letters
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          Include Uppercase Letters
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>
      </div>
      <div>
        <input
          type="range"
          min={8}
          max={32}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        Character Length: {length}
      </div>
     <div> <div className="generate-button-container">
        <button className="generate-button" onClick={generatePassword}>
          GENERATE
        </button>
        {showGif && (
          <div className="gif-container">
            <iframe
              src="https://giphy.com/embed/RDfVcFq9IHbBicfCwD"
              width="120"
              height="120"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/stickers/makespace-lock-storage-locker-RDfVcFq9IHbBicfCwD">
                
              </a>
            </p>
          </div>
        )}
      </div>
      <div>  {password && <input className='p' type="text" value={password} readOnly />}</div>
       </div>
       
      
    </div>
  );
};

export default PasswordGenerator;
