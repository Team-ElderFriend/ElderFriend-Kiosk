import logo from './logo.svg';
import './App.css';
import MenuListView from "./components/MenuListView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuListView menuIds={[3, 4, 3, 3, 3, 3]}/>

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
    </div>
  );
}

export default App;
