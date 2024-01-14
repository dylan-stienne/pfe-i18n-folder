import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./views/Home/Home";
import "./style/main.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
      <ToastContainer />
      </>
  );
}

export default App;
