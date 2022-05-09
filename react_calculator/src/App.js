import logo from './logo.svg';
import './App.css';
import Calculator from './calculator.js';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Calculator></Calculator>
    </div>
  );
}

export default App;
