import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Nav from "./components/Nav";
import Login from "./views/Login";
import OnBoard from "./views/OnBoard";
import Dashboard from "./views/Dashboard";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Nav childComp={<Home />} />} />
          <Route path="/login" element={<Nav childComp={<Login />} />} />
          <Route
            path="/dashboard"
            element={<Nav childComp={<Dashboard />} />}
          />
          <Route path="/onboard" element={<Nav childComp={<OnBoard />} />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
