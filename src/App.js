import logo from './logo.svg';
import './App.css';

import NewComp from './NewComp';

function App() {

  const styles = {
    fontStyle: "bold",
    color: "teal"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <h1 style={styles}>Welcome</h1>
        <NewComp/>
      </body>
    </div>
  );
}

export default App;
