import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import LoginPage from "./pages/login"; 
import Register from "./pages/register";
import Home from "./pages/home";
import Posts from "./pages/posts";
import Header from "./nav/header";
import Dashboard from "./pages/dashboard"; 
import Developers from "./pages/developers"; 
import ProfilePage from "./pages/profile"; 
import PostDetail from "./pages/postDetails";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/developers/:id" element={<ProfilePage />} />
              <Route path="/posts/:id" element={<PostDetail />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/posts" element={<Posts />} />
            </Routes>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
