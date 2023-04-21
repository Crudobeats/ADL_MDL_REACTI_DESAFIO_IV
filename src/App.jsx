import "./App.css";
import MiApi from "./components/MiApi";

function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light">
        <h2>Rick & Morty Universe</h2>
    </nav>
    <div>
      <MiApi />
    </div>
    </div>
  );
}

export default App;
