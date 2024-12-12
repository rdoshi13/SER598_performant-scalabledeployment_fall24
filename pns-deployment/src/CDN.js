import React from 'react';
import './kubernetes.css';
import { Link } from "react-router-dom";

function CDN() {
  return (
    <div className="cdn">
      <div className="navigation-buttons">
        <Link to="/" className="home-button">
          Home
        </Link>
        <Link to="/ci-cd" className="next-button">
        CICD
        </Link>
      </div>
      <header className="App-header">
        <h1>Content Delivery Network (CDN) Tutorial</h1>
      </header>

      <section className="learning-outcomes">
      <h2>Learning Outcomes</h2>
      <ul>
        <li>
          <strong>Remember:</strong> Define a Content Delivery Network (CDN) and describe its purpose in web content delivery.
        </li>
        <li>
          <strong>Understand:</strong> Explain the benefits of CDNs, including latency reduction, load balancing, and faster user experiences.
        </li>
        <li>
          <strong>Apply:</strong> Demonstrate the deployment of an application using a CDN to serve content more efficiently.
        </li>
        <li>
          <strong>Analyze:</strong> Compare the performance differences between a centralized server and a CDN-backed architecture by interpreting latency metrics.
        </li>
        <li>
          <strong>Evaluate:</strong> Assess the role of CDNs in improving scalability and user satisfaction in real-world scenarios.
        </li>
        <li>
          <strong>Create:</strong> Design a content delivery solution that incorporates CDNs to address scalability challenges and optimize performance for global audiences.
        </li>
      </ul>
    </section>


      <section className="introduction">
        <h2>Introduction</h2>
        <p>
          A Content Delivery Network (CDN) is a distributed network of servers strategically located across various geographic locations to deliver digital content (such as web pages, images, videos, and other assets) to users more efficiently and reliably.
          CDNs are designed to reduce latency, increase speed, and improve the overall user experience by serving content from the server that is closest to the end-user's physical location.
        </p>
        <h3>Case Study</h3>
        <p>
          For the below given case, if the webservice for an organization has been hosted on a server which is hosted at a server in San Jose. If you analyse the situation, as we move further away from the host, the latency of the request (amount of time for a request to reach the server and back) increases.
        </p>
        <img src="/CDN_Example.png" alt="CDN Example" />

        <h3>Problem</h3>
        <ol>
          <li>
            <strong>Uneven Latency Across Users:</strong>
            <ul>
              <li>Users close to the server (e.g., San Francisco) enjoy faster response times.</li>
              <li>Users farther from the server (e.g., Nepal) face significantly longer delays, leading to a degraded experience.</li>
            </ul>
          </li>
          <li>
            <strong>Decreased User Satisfaction:</strong>
            <ul>
              <li>Users in Nepal or London may abandon the service due to slow page loads or interactions, impacting business goals like engagement and revenue.</li>
            </ul>
          </li>
          <li>
            <strong>Scalability Challenges:</strong>
            <ul>
              <li>If traffic from regions like New York or Nepal increases, the San Jose server might become overwhelmed, impacting performance for all users.</li>
            </ul>
          </li>
        </ol>

        <h3>Solution</h3>
        <p>A Content Delivery Network (CDN) can solve these issues by deploying edge servers in multiple regions. Here’s how it would work:</p>
        <ol>
          <li>
            <strong>Edge Servers:</strong>
            <ul>
              <li>A CDN places servers closer to end-users, such as in San Francisco, New York, London, and a nearby location for Nepal (e.g., Singapore or India).</li>
              <li>Cached content is served from these edge servers instead of the central San Jose host.</li>
            </ul>
          </li>
          <li>
            <strong>Latency Reduction:</strong>
            <ul>
              <li>San Francisco: Served from a nearby edge server (e.g., 10 ms latency).</li>
              <li>New York: Served from an edge server on the East Coast (e.g., 10 ms latency).</li>
              <li>London: Served from an edge server in Europe (e.g., 15 ms latency).</li>
              <li>Nepal: Served from an edge server in Asia (e.g., 20 ms latency).</li>
            </ul>
          </li>
          <li>
            <strong>Load Balancing:</strong>
            <ul>
              <li>Traffic is distributed among multiple edge servers, preventing the San Jose host from becoming a bottleneck.</li>
            </ul>
          </li>
          <li>
            <strong>Faster User Experience:</strong>
            <ul>
              <li>All users, regardless of location, experience faster load times and consistent performance.</li>
            </ul>
          </li>
        </ol>
        <img src="/CDN_Example_improved.png" alt="CDN Improved Example" />

        <h3>Conclusion</h3>
        <p>
          In the original setup, the central server in San Jose causes increasing latency for users further away (Nepal being the worst affected). A CDN mitigates this by reducing the distance between the user and the content, ensuring a faster, more reliable experience for everyone. This approach is critical for businesses targeting a global audience.
        </p>
      </section>

      <section className="demo">
        <h2>Demo</h2>
        <h3>Steps to Run and Deploy the Application on Heroku with Custom Domain and Optimize Performance</h3>

        <h4>1. Clone the GitHub Repository</h4>
        <hr />
        <ul>
          <li>Open your terminal.</li>
          <li>Clone the repository:
            <div className="code-block">
              <pre>
                <code>
                  {`git clone https://github.com/withPrasheel/my-cdn-demo.git`}
                </code>
              </pre>
            </div>
          </li>
          <li>Navigate to the project directory:
            <div className="code-block">
              <pre>
                <code>
                  {`cd my-cdn-demo`}
                </code>
              </pre>
            </div>
          </li>
        </ul>

        <h4>2. Prepare for Heroku Deployment</h4>
        <hr />
        <ul>
          <li>Ensure you have the Heroku CLI installed. Download it from <a href="https://devcenter.heroku.com/articles/heroku-cli" target="_blank" rel="noopener noreferrer">Heroku CLI</a>.</li>
          <li>Log in to Heroku:
            <div className="code-block">
              <pre>
                <code>
                  {`heroku login`}
                </code>
              </pre>
            </div>
          </li>
          <li>Create a new Heroku app:
            <div className="code-block">
              <pre>
                <code>
                  {`heroku create`}
                </code>
              </pre>
            </div>
          </li>
          <li>Add the <code>Procfile</code> for Heroku deployment. It is already included in the repository:
            <div className="code-block">
              <pre>
                <code>
                  {`web: node index.js`}
                </code>
              </pre>
            </div>
          </li>
          <li>Push the app to Heroku:
            <div className="code-block">
              <pre>
                <code>
                  {`git add .
git commit -m "Initial deployment"
git push heroku main`}
                </code>
              </pre>
            </div>
          </li>
        </ul>

        <h4>3. Verify the Application is Running</h4>
        <hr />
        <ul>
          <li>Open the Heroku URL provided after deployment.</li>
          <li>Test the app in the browser to ensure it works correctly.</li>
        </ul>

        <h4>4. Configure a Custom Domain Using Namecheap</h4>
        <hr />
        <ul>
          <li>Purchase a domain from <a href="https://www.namecheap.com/" target="_blank" rel="noopener noreferrer">Namecheap</a> or use an existing one.</li>
          <li>Log in to Namecheap and navigate to the DNS settings for your domain.</li>
          <li>Add the following DNS records:
            <ul>
              <li><strong>Type:</strong> CNAME</li>
              <li><strong>Host:</strong> @</li>
              <li><strong>Value:</strong> The DNS target provided by Heroku (e.g., <code>randomstring.herokudns.com</code>).</li>
              <li><strong>TTL:</strong> Automatic</li>
            </ul>
          </li>
          <li>Add another CNAME for the "www" subdomain:
            <ul>
              <li><strong>Type:</strong> CNAME</li>
              <li><strong>Host:</strong> www</li>
              <li><strong>Value:</strong> The same DNS target from Heroku.</li>
              <li><strong>TTL:</strong> Automatic</li>
            </ul>
          </li>
        </ul>

        <h4>5. Set Up SSL on Heroku and Namecheap</h4>
        <hr />
        <ul>
          <li>Enable Automated Certificate Management (ACM) on Heroku:
            <ul>
              <li>Log in to Heroku Dashboard.</li>
              <li>Go to "Settings" for your app.</li>
              <li>Under "Domains and certificates," enable ACM.</li>
              <li>Wait for the SSL certificate to be provisioned (may take a few minutes).</li>
            </ul>
          </li>
          <li>Verify SSL is active by visiting <code>https://yourdomain.com</code>.</li>
        </ul>

        <h4>6. Configure Cloudflare for CDN and Optimization</h4>
        <hr />
        <ul>
          <li>Create a Cloudflare account at <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare</a>.</li>
          <li>Add your domain to Cloudflare.</li>
          <li>Update your domain's nameservers in Namecheap to use the nameservers provided by Cloudflare.</li>
          <li>In Cloudflare Dashboard:
            <ul>
              <li>Go to "SSL/TLS" and set the encryption mode to "Full (strict)."</li>
              <li>Enable "Always Use HTTPS" under "Edge Certificates."</li>
              <li>Go to "Caching" &gt; "Configuration" and set "Caching Level" to "Standard."</li>
              <li>Create a Page Rule for caching:
                <ul>
                  <li><strong>URL Pattern:</strong> <code>https://yourdomain.com/*</code></li>
                  <li><strong>Settings:</strong>
                    <ul>
                      <li>Cache Level: Cache Everything</li>
                      <li>Edge Cache TTL: 1 day</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <h4>7. Optimize Application Performance</h4>
        <hr />
        <ul>
          <li>Add <code>app.set('trust proxy', true);</code> in <code>index.js</code> to ensure the app handles HTTPS correctly behind Cloudflare.</li>
          <li>Ensure static assets are served with proper cache headers:
            <ul>
              <li><code>Cache-Control: public, max-age=2592000, immutable</code></li>
            </ul>
          </li>
          <li>You can also minify and compress static assets (CSS, JS, images) using tools like:
            <ul>
              <li><a href="https://cssnano.co/" target="_blank" rel="noopener noreferrer">CSSNano</a></li>
              <li><a href="https://github.com/mishoo/UglifyJS" target="_blank" rel="noopener noreferrer">UglifyJS</a></li>
              <li><a href="https://tinypng.com/" target="_blank" rel="noopener noreferrer">TinyPNG</a></li>
            </ul>
          </li>
        </ul>

        <h4>8. Test and Analyze Performance Using WebPageTest</h4>
        <hr />
        <ul>
          <li>Go to <a href="https://www.webpagetest.org/" target="_blank" rel="noopener noreferrer">WebPageTest</a>.</li>
          <li>Enter your domain URL (e.g., <code>https://yourdomain.com</code>).</li>
          <li>Select "Singapore" as the test location.</li>
          <li>Run the test and analyze results:
            <ul>
              <li>Look for metrics like "First Byte Time" and "Fully Loaded Time."</li>
              <li>Check the waterfall chart for any delays or redundant requests.</li>
            </ul>
          </li>
          <li>Optimize further based on the insights (e.g., reduce file sizes, enable Brotli compression).</li>
        </ul>

        <h4>Conclusion</h4>
        <hr />
        <ul>
            <li>
                <ul>
                    <li>The above applicaiton is deployed on <code>https://my-cdn-demo-app-292e59634003.herokuapp.com/</code></li>
                    <li>The website had a Time to First Byte time of 0.890s in <a href="https://drive.google.com/file/d/1Sr3_Ytoq2gN-wphIBQUH2zdF3nVaxexs/view?usp=sharing">Virgina</a> and of 1.743s in <a href="https://drive.google.com/file/d/1J-dEDpLBGtODkQa-N2GTBqPonwo9lTGx/view?usp=sharing">Singapore</a> with the links to test file attached to the names. </li>
                    <li>If you follow the above steps, it should reduce the First Byte time to sub 1s for both the regions.</li>
                </ul>
            </li>
        </ul>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>
          Implementing a CDN transforms the content delivery architecture from a single centralized server to a distributed network of edge servers. This setup ensures that users worldwide experience faster load times, improved reliability, and enhanced security, which are crucial for maintaining a competitive edge in the digital landscape.
        </p>
      </section>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link
          to={{
            pathname: "/quiz/cdnQuiz",
          }}
          state={{ backTo: "/cdn", pageName: "CDN" }}
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
        <p>&copy; 2024 CDN Tutorial. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CDN;
