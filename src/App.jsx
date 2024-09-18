import { useState } from "react";
import "./App.css";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation(); // This should be inside the Router

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={500} classNames="fade">
        <div className="page-transition">
          <ScrollToTop />
          <Routes location={location}>
            <Route path="/" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
