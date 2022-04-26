import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Nav childComp={<Home />} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
