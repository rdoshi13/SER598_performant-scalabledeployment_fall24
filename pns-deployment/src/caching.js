import React from "react";
import { Link } from "react-router-dom";
import "./kubernetes.css";
import CacheDemo from "./CacheDemo";

function Caching() {
  return (
    <div className="Caching">
      <div className="navigation-buttons">
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>

      <header className="App-header">
        <h1>Caching Tutorial</h1>
      </header>

      <section className="introduction">
        <h2>Introduction to Caching</h2>
        <p>
          Caching is a technique used in computer systems and networks to temporarily store frequently accessed data in a location that allows for faster access. The main purpose of caching is to reduce the time and resources required to retrieve data, improving performance and efficiency.
        </p>
      </section>

      <section className="importance">
        <h2>Why is Caching Important?</h2>
        <p>
          Imagine you're studying and constantly referring to the same textbook page. Instead of opening the book every time, you leave it open on your desk for easy access. This is similar to caching — frequently accessed data is kept close to where it's needed to save time and effort.
        </p>
        <h3>Key Benefits:</h3>
        <ul>
          <li>
            <strong>Improved Performance:</strong> Reduces the time it takes to fetch data.
          </li>
          <li>
            <strong>Reduced Load:</strong> Decreases the workload on the primary data source (e.g., database or server).
          </li>
          <li>
            <strong>Cost Efficiency:</strong> Lowers resource consumption by minimizing repeated operations.
          </li>
        </ul>
      </section>

      <section className="how-it-works">
        <h2>How Does Caching Work?</h2>
        <p>
          When a system or application requests data, a cache (temporary storage) checks if the requested data is already stored. If it is:
        </p>
        <ul>
          <li>
            <strong>Cache Hit:</strong> The cache serves the data immediately.
          </li>
          <li>
            <strong>Cache Miss:</strong> If not, the cache fetches it from the original source, stores it, and delivers it.
          </li>
        </ul>

        <h3>Example:</h3>
        <p>
          A student requests a file from a university server. If the cache has the file, it delivers it instantly. If not, the server retrieves the file, sends it to the cache, and then to the student.
        </p>
      </section>

      <section className="case-study">
        <h2>Case Study</h2>
        <p>
          For an e-commerce website, let’s say there’s a product page that gets viewed thousands of times daily.
        </p>
        <h3>Without Caching:</h3>
        <ul>
          <li>Every request would go to the main database, causing delays and potentially overwhelming the server.</li>
          <li>User experience degrades as pages load slowly.</li>
        </ul>
        <h3>With Caching:</h3>
        <ul>
          <li>The product page is stored in a cache server.</li>
          <li>Users accessing this page are served directly from the cache, ensuring faster load times and reducing server stress.</li>
        </ul>
      </section>

      <section className="types-of-caching">
        <h2>Types of Caching</h2>
        <ul>
          <li>
            <strong>Browser Cache:</strong> Stores website assets (e.g., images, CSS, JavaScript) locally on the user’s device. Results in faster page reloads when revisiting a site.
          </li>
          <li>
            <strong>Database Cache:</strong> Keeps frequently queried data in memory. Accelerates database performance.
          </li>
          <li>
            <strong>Application Cache:</strong> Caches processed data or results within the application. Useful for reducing redundant computations.
          </li>
          <li>
            <strong>Content Delivery Network (CDN) Cache:</strong> Stores website content on servers across the globe. Ensures users are served from a server near their location, reducing latency.
          </li>
        </ul>
      </section>

      <section className="challenges">
        <h2>Challenges in Caching</h2>
        <ul>
          <li>
            <strong>Stale Data:</strong> Cached data may become outdated if the original source changes.
            <br />
            <strong>Solution:</strong> Implement cache expiration policies.
          </li>
          <li>
            <strong>Cache Misses:</strong> Occurs when data isn’t found in the cache, leading to slower responses.
            <br />
            <strong>Solution:</strong> Optimize cache population strategies.
          </li>
          <li>
            <strong>Storage Limitations:</strong> Caches have limited storage; older data may be removed to make space for new data.
            <br />
            <strong>Solution:</strong> Use efficient cache eviction policies like LRU (Least Recently Used).
          </li>
        </ul>
      </section>

      <section className="demo">
        <h2>Demo Instructions</h2>
        <ol style={{ textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
          <li>Clone the project from the GitHub repository:</li>
          <pre>
            <code>git clone https://github.com/withPrasheel/caching-demo.git</code>
          </pre>
          <li>Navigate to the project directory:</li>
          <pre>
            <code>cd caching-demo</code>
          </pre>
          <li>Install dependencies:</li>
          <pre>
            <code>npm install</code>
          </pre>
          <li>Start the project:</li>
          <pre>
            <code>npm start</code>
          </pre>
          <li>Open the browser and interact with the demo:</li>
          <ul>
            <li>Disable caching by unchecking the "Enable Cache" checkbox.</li>
            <li>Click "Fetch Data" and observe the console logs for the time taken (e.g., 466ms).</li>
            <li>Enable caching by checking the "Enable Cache" checkbox.</li>
            <li>Click "Fetch Data" again and observe the console logs for the reduced time (e.g., 193ms).</li>
          </ul>
        </ol>
        <div>
          <CacheDemo/>
        </div>

        <h3>Results</h3>
        <p>
          The results of the caching demo were as follows:
        </p>
        <ul>
          <li><strong>Without Caching:</strong> 215ms</li>
          <li><strong>With Caching:</strong> 0.31ms</li>
        </ul>
        <img
          src="caching-demo-results.png"
          alt="Caching Demo Results"
          style={{ maxWidth: "100%", margin: "20px 0", border: "1px solid #ddd" }}
        />
      </section>

      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>
          The caching demo demonstrates how caching significantly improves performance by reducing the time required to fetch data.
          Without caching, requests take longer because they rely on the original data source, as shown by the 466ms response time.
          With caching enabled, the data is served directly from the cache, resulting in faster responses, as seen with the reduced time of 193ms.
        </p>
        <p>
          Caching is a crucial technique for optimizing system performance, reducing server load, and enhancing user experience, especially for frequently accessed data.
        </p>
      </section>



      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link
          to={{
            pathname: "/quiz/cachingQuiz",
          }}
          state={{ backTo: "/caching", pageName: "Caching" }}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#ffffff",
            backgroundColor: "#2196f3",
            border: "none",
            borderRadius: "8px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Knowledge Check
        </Link>
      </div>

      <footer className="App-footer">
        <p>&copy; 2024 Caching Tutorial. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Caching;
