import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import CloudComputing from "./CloudComputing";
import Containers from "./Containers";
import Kubernetes from "./Kubernetes";
import CICD from "./CICD";
// Import the Quiz component
import Quiz from "./Quiz";
import CDN from "./CDN";

function Home() {
  return (
    <div>
      {/* Header Section */}
      <header className="App-header">
        <h1>Performant and Scalable Deployment Project</h1>
        <p className="App-subheading">
          Learn the key concepts and strategies behind creating scalable,
          reliable, and efficient systems in the modern era.
        </p>
      </header>

      {/* Table of Contents Section */}
      <section className="Table-of-contents">
        <h2>Table of Contents</h2>
        <ul>
          <li>
            <Link to="/cloud-computing">Cloud Computing</Link>
          </li>
          <li>
            <Link to="/containers">Containers</Link>
          </li>
          <li>
            <Link to="/kubernetes">Kubernetes</Link>
          </li>
          <li>
            <Link to="/cdn">Content Delivery Networks (CDNs)</Link>
          </li>
          <li>
            <Link to="/caching">Caching</Link>
          </li>
          <li>
            <Link to="/ci-cd">
              Continuous Integration and Deployment (CI/CD)
            </Link>
          </li>
        </ul>
      </section>

      {/* Detailed Topic Introductions Section */}
      <main className="Topics-overview">
        <h2>Topics Overview</h2>

        <section id="cloud-computing">
          <h3>
            <Link to="/cloud-computing">Cloud Computing</Link>
          </h3>
          <p>
            Cloud computing provides scalable, on-demand resources for storage,
            processing, and more. It eliminates the need for physical
            infrastructure by offering services like IaaS, PaaS, and SaaS. Learn
            how this technology supports large-scale deployments and global
            availability.
          </p>
        </section>

        <section id="containers">
          <h3>
            <Link to="/containers">Containers</Link>
          </h3>
          <p>
            Containers, such as those powered by Docker, provide lightweight,
            portable environments for deploying applications. They ensure
            consistency across development, testing, and production
            environments, simplifying software delivery and scaling.
          </p>
        </section>

        <section id="kubernetes">
          <h3>
            <Link to="/kubernetes">Kubernetes</Link>
          </h3>
          <p>
            Kubernetes automates the management of containerized applications.
            It provides features like scaling, load balancing, rolling updates,
            and fault tolerance, making it essential for managing modern
            distributed systems.
          </p>
        </section>

        <section id="cdn">
          <h3>
            <Link to="/cdn">Content Delivery Networks (CDNs)</Link>
          </h3>
          <p>
            CDNs improve the performance of websites and applications by caching
            content at strategically placed servers worldwide. They reduce
            latency and ensure fast delivery of static and dynamic content to
            users globally.
          </p>
        </section>

        <section id="caching">
          <h3>
            <Link to="/caching">Caching</Link>
          </h3>
          <p>
            Caching enhances application performance by storing frequently
            accessed data in memory or nearby storage. This reduces the need for
            repeated database queries or expensive computations, improving
            response times.
          </p>
        </section>

        <section id="ci-cd">
          <h3>
            <Link to="/ci-cd">
              Continuous Integration and Deployment (CI/CD)
            </Link>
          </h3>
          <p>
            CI/CD pipelines automate the software delivery process, ensuring
            reliable and efficient deployment. By integrating and delivering
            code changes seamlessly, they minimize manual errors and speed up
            development cycles.
          </p>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/containers" element={<Containers />} />
        <Route path="/ci-cd" element={<CICD />} />
        <Route path="/kubernetes" element={<Kubernetes />} />
        <Route path="/cdn" element={<CDN />} />

        <Route path="/quiz/:quizKey" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
