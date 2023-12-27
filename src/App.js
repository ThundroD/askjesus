import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
import WWJDPage from './pages/WWJDPage';
import BlogPage from './pages/BlogPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage'; // Ensure you have this component created
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Ensure you have this component created

function App() {
  useEffect(() => {
    // Script integration
    window.ezstandalone = window.ezstandalone || {};
    window.ezstandalone.cmd = window.ezstandalone.cmd || [];
    window.ezstandalone.cmd.push(function() {
      window.ezstandalone.define(188);
      window.ezstandalone.enable();
      window.ezstandalone.display();
    });
    // The empty dependency array ensures this effect runs once on mount
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wwjd" element={<WWJDPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
}

export default App;


