import './App.css';

function App() {
  return (
    <div className="App">
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Password Generator</h1>
          <div className='output-password'>
            <h3>Password</h3>
            <button className='copy-btn'>Copy</button>
          </div>

          <div className='specification'>
            <label htmlFor='password-strength'>Password Length</label>
            <input type='number' className='number-field' id='password-strength' name='password-strength' max='20' min='10' />
          </div>

          <div className='specification'>
            <label htmlFor='uppercase-letters'>Uppercase</label>
            <input type='checkbox' className='checkbox' id='uppercase-letters' name='uppercase-letters' />
          </div>

          <div className='specification'>
            <label htmlFor='lowercase-letters'>Lowercase</label>
            <input type='checkbox' className='checkbox' id='lowercase-letters' name='lowercase-letters' />
          </div>

          <div className='specification'>
            <label htmlFor='include-numbers'>Numbers</label>
            <input type='checkbox' className='checkbox' id='include-numbers' name='include-numbers' />
          </div>

          <div className='specification'>
            <label htmlFor='include-symbols'>Symbols</label>
            <input type='checkbox' className='checkbox' id='include-symbols' name='include-symbols' />
          </div>

          <button className='generate-btn'>Generate Password</button>

        </div>
      </section>
    </div>
  );
}

export default App;
