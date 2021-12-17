
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
     // BEM naming Convention
    <div className="app">
      {/* <h1>Whats App Clone</h1> */}

      <div className="app__body">
        <Sidebar />
        {/* Sidebar */}
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
