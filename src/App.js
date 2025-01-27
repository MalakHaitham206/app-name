import React,{ useState, useEffect }  from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AuthForm from "../src/pages/AuthForm";
import Home from "./pages/Home";
import Navbar from "./Components/NavBarComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarRoutes = ["/"];
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar onSearchChange={handleSearchChange} />}
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
