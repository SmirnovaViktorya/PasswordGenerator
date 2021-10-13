import React, { useState } from 'react';
import './App.css';
import { numbers, upperCaseLetters, lowerCaseLetters, specialSymbols } from './symbols';

function App() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(20);
  const [UpperCase, setUpperCase] = useState(false);
  const [LowerCase, setLowerCase] = useState(false);
  const [Numbers, setNumbers] = useState(false);
  const [Symbols, setSymbols] = useState(false);

  const handleGeneratePassword = (e) => {
    let symbolsList = '';
    if (UpperCase) {
      symbolsList += upperCaseLetters
    }
    if (LowerCase) {
      symbolsList += lowerCaseLetters
    }
    if (Numbers) {
      symbolsList += numbers
    }
    if (Symbols) {
      symbolsList += specialSymbols
    }
    setPassword(generatePasswod(symbolsList))
  }

  const generatePasswod = (symbolsList) => {
    let password = '';
    const lengthSymbolsList = symbolsList.length;

    for (let i = 0; i < passwordLength; i++) {
      const index = Math.round(Math.random() * lengthSymbolsList);
      password += symbolsList.charAt(index)
    }
    return password
  }
  return (
    <div className="App">
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Password Generator</h1>
          <div className='output-password'>
            <h3>{password}</h3>
            <button className='copy-btn'>Copy</button>
          </div>

          <div className='specification'>
            <label htmlFor='password-strength'>Password Length</label>
            <input defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type='number' className='number-field' id='password-strength' name='password-strength' max='20' min='10' />
          </div>

          <div className='specification'>
            <label htmlFor='uppercase-letters'>Uppercase</label>
            <input checked={UpperCase}
              onChange={(e) => setUpperCase(e.target.checked)}
              type='checkbox' className='checkbox' id='uppercase-letters' name='uppercase-letters' />
          </div>

          <div className='specification'>
            <label htmlFor='lowercase-letters'>Lowercase</label>
            <input checked={LowerCase}
              onChange={(e) => setLowerCase(e.target.checked)}
              type='checkbox' className='checkbox' id='lowercase-letters' name='lowercase-letters' />
          </div>

          <div className='specification'>
            <label htmlFor='include-numbers'>Numbers</label>
            <input checked={Numbers}
              onChange={(e) => setNumbers(e.target.checked)}
              type='checkbox' className='checkbox' id='include-numbers' name='include-numbers' />
          </div>

          <div className='specification'>
            <label htmlFor='include-symbols'>Symbols</label>
            <input checked={Symbols}
              onChange={(e) => setSymbols(e.target.checked)}
              type='checkbox' className='checkbox' id='include-symbols' name='include-symbols' />
          </div>

          <button onClick={handleGeneratePassword} className='generate-btn'>Generate Password</button>

        </div>
      </section>
    </div>
  );
}

export default App;
