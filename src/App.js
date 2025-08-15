import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos'; import 'aos/dist/aos.css';
import Home from './pages/Home'; import Team from './pages/Team'; import Schedule from './pages/Schedule';
import Stats from './pages/Stats'; import News from './pages/News'; import FanZone from './pages/FanZone';

export default function App(){
  React.useEffect(()=>{ AOS.init({duration:800, once:true}); },[]);
  return (
    <Router>
      <header className="navbar">
        <div className="brand"><img src="/assets/logo.png" alt="logo"/><h1>RCB Fan Hub</h1></div>
        <nav className="nav-links">
          <Link to="/">Home</Link><Link to="/team">Team</Link><Link to="/schedule">Schedule</Link>
          <Link to="/stats">Stats</Link><Link to="/news">News</Link><Link to="/fanzone">Fan Zone</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/stats" element={<Stats/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/fanzone" element={<FanZone/>} />
      </Routes>

      <footer className="footer">© {new Date().getFullYear()} Royal Challengers Bengaluru — Play Bold</footer>
    </Router>
  );
}