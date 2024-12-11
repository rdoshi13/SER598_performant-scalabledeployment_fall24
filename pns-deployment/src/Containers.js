import React from "react";
import "./App.css";

function Containers() {
  return (
    <div className="Containers">
      <h1>Containers</h1>

      <section>
        <h2>Topic</h2>
        <p>
          Introduction to Containers and its significance in scalable
          deployment.
        </p>
      </section>

      <section>
        <h2>Description</h2>
        <p>
          Containers refers to the delivery of computing services over the
          internet, including storage, processing power, and applications.
        </p>
      </section>

      <section>
        <h2>Theory</h2>
        <p>
          This section would cover the core concepts of Containers, including
          types (IaaS, PaaS, SaaS), benefits, and common use cases.
        </p>
      </section>

      <section>
        <h2>Diagrams</h2>
        <p>A placeholder for diagrams to illustrate Containers.</p>
        {/* Placeholder Image */}
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Overview_image?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1498&qlt=100&fmt=png-alpha&fit=constrain"
          alt="Cloud Computing Diagram"
        />
      </section>

      <section>
        <h2>Code</h2>
        <pre>
          <code>
            {`// Example code for deploying a cloud instance
const deployInstance = () => {
  console.log("Deploying cloud instance...");
};

deployInstance();`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Interactive Sandbox</h2>
        <p>
          A placeholder for an interactive sandbox where users can try cloud
          computing demos. This could use a real-time editor in the future.
        </p>
        {/* Sandbox optional */}
      </section>
    </div>
  );
}

export default Containers;
