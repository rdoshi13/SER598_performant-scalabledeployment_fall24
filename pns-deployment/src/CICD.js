import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function CICD() {
  return (
    <div className="CICD">
      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <Link to="/" className="home-button">Home</Link>
        <Link to="/containers" className="next-button">Containers</Link>
      </div>

      <h1>Continuous Integration and Deployment (CI/CD)</h1>
      
      <section>
        <h2>What is CI/CD?</h2>
        <p>CI/CD stands for Continuous Integration and Continuous Deployment. It is a set of practices and tools that automate software development processes, allowing developers to integrate code changes frequently, run automated tests, and deploy new software versions quickly and reliably.</p>
      </section>

      <section>
        <h2>Jenkins - The CI/CD Tool</h2>
        <p>Jenkins is a free and open-source automation server used to compile, build, test, and deploy software applications. It plays a vital role in the CI/CD pipeline by automating the repetitive tasks required to deliver quality software at speed.</p>
      </section>

      <section>
        <h2>Setting up Jenkins</h2>
        <h3>Step 1: Install Docker</h3>
        <p>Docker is required to run Jenkins as a containerized application. Follow these steps to set up Docker:</p>
        <ol>
          <li>Download and install <a href="https://www.docker.com/products/docker-desktop" target="_blank" rel="noopener noreferrer">Docker Desktop</a> for your system.</li>
          <li>Run the following command to verify Docker is installed and working:</li>
          <p>docker run hello-world</p>
          <p>If you see "Hello from Docker", it means everything is running correctly.</p>
        </ol>

        <h3>Step 2: Clone the Jenkins Docker Repository</h3>
        <ol>
          <li>Run the following command to clone the repository:</li>
          <p>git clone https://github.com/vdespa/install-jenkins-docker.git</p>
          <li>Change to the directory of the cloned repository:</li>
          <p>cd install-jenkins-docker</p>
        </ol>

        <h3>Step 3: Build and Run the Jenkins Docker Image</h3>
        <ol>
          <li>Build the Docker image for Jenkins using the following command:</li>
          <p>docker build -t my-jenkins .</p>
          <li>Run the following command to start Jenkins in detached mode:</li>
          <p>docker compose up -d</p>
          <p>It may take some time as Docker downloads the required images. When the output shows "running 5/5", Jenkins is successfully running at <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080</a>.</p>
        </ol>
      </section>

      <section>
        <h2>Configuring Jenkins</h2>
        <p>To configure Jenkins, follow these steps:</p>
        <ol>
          <li>Access Jenkins at <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080</a>.</li>
          <li>Check the logs for the initial admin password. Use the following command:</li>
          <p>docker exec my-jenkins cat /var/jenkins_home/secrets/initialAdminPassword</p>
          <li>Copy the password and paste it into the Jenkins setup screen.</li>
          <li>Click on "Install suggested plugins" and wait for the plugins to install.</li>
          <li>Create a new username and password for Jenkins.</li>
        </ol>
      </section>

      <section>
        <h2>Creating Your First Job in Jenkins</h2>
        <ol>
          <li>Go to the Jenkins Dashboard and click <strong>New Item</strong>.</li>
          <li>Enter a name for your job and select <strong>Freestyle project</strong> as the project type.</li>
          <li>In the <strong>Build Steps</strong> section, select <strong>Execute shell</strong> and enter the following command:</li>
          <p>echo "Hello Jenkins"</p>
          <li>Save the configuration and click <strong>Build Now</strong> from the left menu.</li>
          <li>Check the <strong>Build History</strong> to see the status of the job and view the console output.</li>
        </ol>
      </section>

      <section>
        <h2>Creating a Pipeline Job</h2>
        <p>Unlike a Freestyle project, a pipeline job allows more flexibility. Follow these steps to create a pipeline:</p>
        <ol>
          <li>Go back to the Dashboard and create a new item.</li>
          <li>Enter a name and select <strong>Pipeline</strong> as the project type.</li>
          <li>In the <strong>Pipeline Script</strong> section, enter the following script:</li>
          <p>
pipeline {'{'}
    agent any
    stages {'{'}
        stage('Hello') {'{'}
            steps {'{'}
                echo 'Hello World'
            {'}'}
        {'}'}
    {'}'}
{'}'}
          </p>
          <li>Save the configuration and click <strong>Build Now</strong> from the left menu.</li>
          <li>Check the <strong>Build History</strong> to see the status of the job and view the console output.</li>
        </ol>
      </section>

      <section>
        <h2>Integrating Jenkins with Git</h2>
        <p>Git is a version control system that works well with Jenkins to track and manage code changes. Here’s how you can integrate Jenkins with Git:</p>
        <ol>
          <li>Register on <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a> if you don’t have an account.</li>
          <li>Fork the <a href="https://github.com/vdespa/install-jenkins-docker" target="_blank" rel="noopener noreferrer">vdespa's Jenkins Docker repository</a> to your GitHub account.</li>
          <li>Clone your forked repository using the following command:</li>
          <p>git clone https://github.com/YOUR_GITHUB_USERNAME/install-jenkins-docker.git</p>
          <li>Install dependencies by running:</li>
          <p>npm install</p>
          <li>Start the project using:</li>
          <p>npm start</p>
        </ol>
      </section>

      <section>
        <h2>Automating Tasks with Jenkins</h2>
        <p>The primary goal of Jenkins is to automate manual steps, reducing errors and saving time. To automate tasks, use Jenkins pipelines with scripts stored in GitHub. These pipelines can be automatically triggered on code changes.</p>
      </section>

      <section>
        <h2>Summary</h2>
        <p>In this tutorial, we covered:</p>
        <ul>
          <li>Setting up Docker</li>
          <li>Running Jenkins in a Docker container</li>
          <li>Configuring Jenkins</li>
          <li>Creating jobs (Freestyle and Pipeline) in Jenkins</li>
          <li>Integrating Jenkins with Git</li>
          <li>Automating tasks to create a CI/CD pipeline</li>
        </ul>
      </section>

      <footer>
        <p>Ready to dive deeper into Jenkins and CI/CD? Practice creating your own pipelines and use GitHub for version control to master CI/CD workflows!</p>
      </footer>
    </div>
  );
}

export default CICD;
