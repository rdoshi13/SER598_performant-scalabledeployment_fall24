import React from 'react';
import './App.css';

function Kubernetes() {
  return (
    <div className="kubernetes">
      <header className="App-header">
        <h1>Kubernetes Tutorial</h1>
      </header>

      <section className="introduction">
        <h2>Introduction</h2>
        <p>
          Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers.
          It allows you to manage containerized applications across multiple hosts and provides container-centric infrastructure.
        </p>
        <h3>Features</h3>
        <ul>
          <li>Automated container deployment, scaling, and management</li>
          <li>Service discovery and load balancing</li>
          <li>Storage orchestration</li>
          <li>Self-healing capabilities</li>
          <li>Automated rollouts and rollbacks</li>
        </ul>

        <h3>Usage</h3>
        <p>
          Kubernetes is widely used to manage microservices, deploy CI/CD pipelines, and ensure application reliability and scalability.
        </p>
      </section>

      <section className="prerequisites">
        <h2>Prerequisites</h2>
        <p>Before starting with Kubernetes, you should have:</p>
        <ul>
          <li>Basic knowledge of containers (e.g., Docker)</li>
          <li>Understanding of Linux command-line</li>
          <li>A computer with a stable internet connection</li>
        </ul>
      </section>

      <section className="installation">
        <h2>Installation</h2>
        <h3>Step 1: Install Docker</h3>
        <p>Ensure Docker is installed on your machine as Kubernetes uses Docker for container management.</p>

        <h3>Step 2: Install Minikube</h3>
        <p>Minikube allows you to run a local Kubernetes cluster. Install it using the following commands:</p>
        <pre>
          <code>
            # On macOS using Homebrew
            brew install minikube

            # On Windows using Chocolatey
            choco install minikube

            # On Linux
            curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
            sudo install minikube-linux-amd64 /usr/local/bin/minikube
          </code>
        </pre>

        <h3>Step 3: Start Minikube</h3>
        <p>Run the following command to start Minikube:</p>
        <pre>
          <code>
            minikube start
          </code>
        </pre>
        <p>Verify the installation by checking the Kubernetes version:</p>
        <pre>
          <code>
            kubectl version --client
          </code>
        </pre>
      </section>

      <section className="examples">
        <h2>Examples</h2>
        <h3>Deploying Your First Application</h3>
        <p>Let's deploy a simple web application using Kubernetes:</p>
        <pre>
          <code>
            # Create a deployment
            kubectl create deployment hello-node --image=k8s.gcr.io/echoserver:1.4

            # Expose the deployment
            kubectl expose deployment hello-node --type=LoadBalancer --port=8080

            # Access the application
            minikube service hello-node
          </code>
        </pre>
      </section>

      <footer className="App-footer">
        <p>&copy; 2024 Kubernetes Tutorial. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Kubernetes;
