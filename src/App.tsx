import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Nav from "./components/Nav";
import Login from "./views/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Nav childComp={<Home />} />} />
          <Route path="/login" element={<Nav childComp={<Login />} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
