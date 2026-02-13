import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Love from "./pages/Love";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/love" element={<Love />} />
       
      </Routes>
    </Router>
  );
}

export default App;
