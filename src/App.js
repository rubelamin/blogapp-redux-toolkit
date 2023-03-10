import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
