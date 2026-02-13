import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Love from "./pages/Love";
import Letter from "./pages/Letter";
import Video from "./pages/Video";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love" element={<Love />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
