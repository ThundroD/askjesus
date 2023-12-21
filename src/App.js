import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
import WWJDPage from './pages/WWJDPage';
import BlogPage from './pages/BlogPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage'; // Import your TermsAndConditionsPage component
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Import your PrivacyPolicyPage component

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wwjd" element={<WWJDPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} /> {/* Route to Terms and Conditions */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> {/* Route to Privacy Policy */}
      </Routes>
    </Router>
  );
}

export default App

