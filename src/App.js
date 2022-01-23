import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle  from "./globalStyles";
import { Navbar } from "./components";
import  Home from "./pages/HomePage/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact/>
      </Routes>
    </Router>
  );
}

export default App;
