import "./App.css";
import MiApi from "./components/MiApi";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="all">
      <Navbar bg="dark" variant="dark" className="mb-5" expand="lg">
        <Navbar.Brand>
        </Navbar.Brand>
      </Navbar>
      <div className="container-fluid">
        <MiApi />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;