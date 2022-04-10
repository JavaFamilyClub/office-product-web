import './App.css';
import Routes from "./router";

function App() {
  return (
     <div className="app">
        {Routes({ turnOffLogin: false, turnOffPermission: false })}
     </div>
  );
}

export default App;
