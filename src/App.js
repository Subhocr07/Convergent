import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import EditProfile from "./components/EditProfile";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

const isAuthenticated = () => {
  // Implement your logic to check if the user is authenticated.
  // For example, check if the token exists in localStorage.
  const token = localStorage.getItem("userToken");
  return !!token; // Return true if the user is authenticated, false otherwise.
};

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flow-root" }}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated() ? <Home /> : <Navigate to="/signin" />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add more routes for other pages */}
          <Route
            path="/profileedit"
            element={
              isAuthenticated() ? <EditProfile /> : <Navigate to="/signin" />
            }
          />
          <Route
            path="/search"
            element={isAuthenticated() ? <Search /> : <Navigate to="/signin" />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
