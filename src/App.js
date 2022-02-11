import './App.css';
import { useState } from 'react'

function App() {
  const [login, setLogin] = useState('Wax Now!')
  return (
    <div className="App">
      <header className="App-header">
        <h1>{login}</h1>
        <div className="buttons">
          <button onClick={() => setLogin('Currently Waxing!')}>Wax On</button>
          <button onClick={() => setLogin('Wax Now!')}>Wax Off</button>
        </div>
      </header>
    </div>
  );
}

export default App;
