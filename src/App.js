import Home from './Pages/Home.js';
import About from './Pages/About';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
// import './App.css';
import React, { Component } from 'react';
import SimpleForm from "./Components/chatbot/SimpleForm.js";



class App extends Component {
  render() {
    return (
      <div className="relative font-mono">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div>
          <SimpleForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
