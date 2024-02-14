import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route, Link
} from "react-router-dom";
import HomePage from "./components/HomePage";
import EmailConfirm from "./components/EmailConfirm";
import Loading from "./components/Loading";
import Glogo from "./assets/glogo.JPG"

function App() {
  return (
    <div className="App">
<Router>
    <div className="header">
    <Link to="/">
    <img src={Glogo} alt="img" className="py-3 md:ml-10 ml-2" />
    </Link>
    </div>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/confirm" element={<EmailConfirm />} />
      <Route exact path="/verification" element={<Loading />} />
    </Routes>
    <div className="footer"></div>
    </Router>    </div>
  );
}

export default App;
