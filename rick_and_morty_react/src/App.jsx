import { useState, useRef } from 'react';
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return(
    <BrowserRouter>
      <div className="page">
        <header>
          <span>
            ЛОГОТИП
          </span>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </header>

        <div className="content">
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/about" element={<AboutPage/>} />
            </Routes>
        </div>

        <footer>
          <span>
            ЛОГОТИП :р
          </span>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App