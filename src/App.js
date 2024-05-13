import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Layout/JavaScript/Navbar";
import RoutesConfig from "./routes/RoutesConfig";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div
        className="container my-4 d-flex"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "50px" }}></div>
        <RoutesConfig />
      </div>
    </BrowserRouter>
  );
}

export default App;
