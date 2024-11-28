import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CloudComputing from './CloudComputing';
import Containers from './Containers';
import Quiz from './Quiz';
import Kubernetes from './Kubernetes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
          {/* Other routes */}
          <Route path="/cloud-computing" element={<CloudComputing />} />
          <Route path="/containers" element={<Containers />} />
          <Route path="/kubernetes" element={<Kubernetes />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <header className="App-header">
        <h1>Performant and Scalable Deployment Project</h1>
        <nav className="Table-of-contents">
          <h2>Table of Contents</h2>
          <ul>
            <li><Link to="/cloud-computing">Cloud Computing</Link></li>
            <li><Link to="/containers">Containers</Link></li>
            <li><Link to="/kubernetes">Kubernetes</Link></li>
            <li><a href="#cdn">Content Delivery Networks (CDNs)</a></li>
            <li><a href="#caching">Caching</a></li>
            <li><a href="#ci-cd">Continuous Integration and Deployment (CI/CD)</a></li>
          </ul>
        </nav>
      </header>
      <footer style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
        <h2>Quiz Section</h2>
        <Quiz uniqueKey="743e9284bjdf2" />
      </footer>
    </div>
  );
}

export default App;
