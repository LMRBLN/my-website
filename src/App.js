import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    if (menuOpen===false) {
      setMenuOpen(true);
    }
    else {
      setMenuOpen(false)
    }
  }

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage/>}> home </Route>
        <Route path="/projects" element={<ProjectsPage/>}> about</Route>
        <Route path="/about" element={<AboutPage/>}> projects </Route>
      </Routes>

      <button class="invisible-button" onClick={handleClick}>
        <Menu menuOpen={menuOpen} />
      </button>

      <Footer/>
    </div>
  );
}

export default App;
