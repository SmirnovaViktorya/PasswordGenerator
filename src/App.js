import React, { useState } from 'react';
import './App.css';
import { Message } from './Messages';
import { NOTHING_TO_COPY, SELECT_OPTION, COPY_SUCCESSFUL } from './messageText';
import { generateSymbolsList, generatePassword, copyToClipboard } from './utils';

function App() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(10);
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
      setMes(COPY_SUCCESSFUL);
    }
    setTimeout(() => setMes(false), 1500);
  }

  return (
    <div className="App">
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Password Generator</h1>
          <div className='output-password'>
            <h3 id='password'>{password}</h3>
            <button onClick={handleCopyPassword} className='copy-btn'>Copy</button>
          </div>

          <div className='specification'>
            <label htmlFor='password-length'>Password Length</label>
            <div className='displayFlex'>
              <p className='passwordLengthValue'>{passwordLength}</p>
              <input defaultValue={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
                type='range' id='password-length' max='15' min='5' />
            </div>
          </div>


          <div className='specification'>
            <label htmlFor='uppercase-letters'>Uppercase</label>
            <input checked={UpperCase}
              onChange={(e) => setUpperCase(e.target.checked)}
              type='checkbox' className='checkbox' id='uppercase-letters' />
          </div>

          <div className='specification'>
            <label htmlFor='lowercase-letters'>Lowercase</label>
            <input checked={LowerCase}
              onChange={(e) => setLowerCase(e.target.checked)}
              type='checkbox' className='checkbox' id='lowercase-letters' />
          </div>

          <div className='specification'>
            <label htmlFor='include-numbers'>Numbers</label>
            <input checked={Numbers}
              onChange={(e) => setNumbers(e.target.checked)}
              type='checkbox' className='checkbox' id='include-numbers' />
          </div>

          <div className='specification'>
            <label htmlFor='include-symbols'>Symbols</label>
            <input checked={Symbols}
              onChange={(e) => setSymbols(e.target.checked)}
              type='checkbox' className='checkbox' id='include-symbols' />
          </div>

          <button onClick={handleGeneratePassword} className='generate-btn'>Generate Password</button>

        </div>
        <Message textMessage={message} />
      </section>
    </div>
  );
}

export default App;
