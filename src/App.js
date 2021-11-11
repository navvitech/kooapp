import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div style={{ background: "#131345", height: "100vh" }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
