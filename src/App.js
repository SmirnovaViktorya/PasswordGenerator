import React, { useState } from 'react';
import './App.css';
import { Message } from './Messages';
import { NOTHING_TO_COPY, SELECT_OPTION } from './messageText';
import { generateSymbolsList, generatePassword, copyToClipboard } from './utils';

function App() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(20);
  const [UpperCase, setUpperCase] = useState(false);
  const [LowerCase, setLowerCase] = useState(false);
  const [Numbers, setNumbers] = useState(false);
  const [Symbols, setSymbols] = useState(false);
  const [message, setMes] = useState(false);

  const handleGeneratePassword = () => {
    let symbolsList = generateSymbolsList({ UpperCase, LowerCase, Numbers, Symbols });
    if (symbolsList === '') {
      setMes(SELECT_OPTION)
    } else {
      setMes(false)
    }
    setPassword(generatePassword(symbolsList, passwordLength))
  }

  const handleCopyPassword = () => {
    if (password === '') {
      setMes(NOTHING_TO_COPY)
    } else {
      copyToClipboard(password)
      setMes(false);
    }
  }

  return (
    <div className="App">
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Password Generator</h1>
          <div className='output-password'>
            <h3>{password}</h3>
            <button onClick={handleCopyPassword} className='copy-btn'>Copy</button>
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
        <Message textMessage={message} />
      </section>
    </div>
  );
}

export default App;
