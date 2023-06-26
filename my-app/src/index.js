import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">My App</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/blogs" element={<Blogs />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NoPage />} />
</Routes>

    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
