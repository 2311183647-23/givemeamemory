
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProgressAxis from './components/ProgressAxis';
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import ProjectPost from './pages/ProjectPost';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Projects from './pages/Projects';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white relative selection:bg-accentGreen/20 selection:text-oceanDeep">
        <ProgressAxis />
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/:slug" element={<ProjectPost />} />
            <Route path="/projects-showcase" element={<Projects />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
