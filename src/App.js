
import './App.css';
import Chat from './Chat.js';
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="app">
      <div className="app_body">

      <Sidebar/>
      <Chat />

      </div>
    </div>
  );
}

export default App;
