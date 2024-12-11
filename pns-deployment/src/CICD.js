import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function CICD() {
  return (
    <div className="CICD">
      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <Link to="/" className="home-button">
          Home
        </Link>
        <Link to="/containers" className="next-button">
          Containers
        </Link>
      </div>

      <h1>Continuous Integration and Deployment (CI/CD)</h1>

      <section>
        <h2>What is CI/CD?</h2>
        <p>
          CI/CD stands for Continuous Integration and Continuous Deployment. It
          is a set of practices and tools that automate software development
          processes, allowing developers to integrate code changes frequently,
          run automated tests, and deploy new software versions quickly and
          reliably.
        </p>
      </section>

      <section>
        <h2>Jenkins - The CI/CD Tool</h2>
        <p>
          Jenkins is a free and open-source automation server used to compile,
          build, test, and deploy software applications. It plays a vital role
          in the CI/CD pipeline by automating the repetitive tasks required to
          deliver quality software at speed.
        </p>
      </section>

      <section>
        <h2>Setting up Jenkins</h2>
        <h3>Step 1: Install Docker</h3>
        <p>
          Docker is required to run Jenkins as a containerized application.
          Follow these steps to set up Docker:
        </p>
        <ol>
          <li>
            Download and install{" "}
            <a
              href="https://www.docker.com/products/docker-desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docker Desktop
            </a>{" "}
            for your system.
          </li>
          <li>
            Run the following command to verify Docker is installed and working:
          </li>
          <pre>
            <code>docker run hello-world</code>
          </pre>
          <p>
            If you see "Hello from Docker", it means everything is running
            correctly.
          </p>
        </ol>

        <h3>Step 2: Clone the Jenkins Docker Repository</h3>
        <ol>
          <li>Run the following command to clone the repository:</li>
          <pre>
            <code>
              git clone https://github.com/vdespa/install-jenkins-docker.git
            </code>
          </pre>
          <li>Change to the directory of the cloned repository:</li>
          <pre>
            <code>cd install-jenkins-docker</code>
          </pre>
        </ol>

        <h3>Step 3: Build and Run the Jenkins Docker Image</h3>
        <ol>
          <li>
            Build the Docker image for Jenkins using the following command:
          </li>
          <pre>
            <code>docker build -t my-jenkins .</code>
          </pre>
          <li>Run the following command to start Jenkins in detached mode:</li>
          <pre>
            <code>docker compose up -d</code>
          </pre>
          <p>
            It may take some time as Docker downloads the required images. When
            the output shows "running 5/5", Jenkins is successfully running at{" "}
            <a
              href="http://localhost:8080"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://localhost:8080
            </a>
            .
          </p>
        </ol>
      </section>

      <section>
        <h2>Configuring Jenkins</h2>
        <p>To configure Jenkins, follow these steps:</p>
        <ol>
          <li>
            Access Jenkins at{" "}
            <a
              href="http://localhost:8080"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://localhost:8080
            </a>
            .
          </li>
          <li>
            Check the logs for the initial admin password. Use the following
            command:
          </li>
          <pre>
            <code>
              docker exec my-jenkins cat
              /var/jenkins_home/secrets/initialAdminPassword
            </code>
          </pre>
          <li>Copy the password and paste it into the Jenkins setup screen.</li>
          <li>
            Click on "Install suggested plugins" and wait for the plugins to
            install.
          </li>
          <li>Create a new username and password for Jenkins.</li>
        </ol>
      </section>

      <section>
        <h2>Creating Your First Job in Jenkins</h2>
        <ol>
          <li>
            Go to the Jenkins Dashboard and click <strong>New Item</strong>.
          </li>
          <li>
            Enter a name for your job and select{" "}
            <strong>Freestyle project</strong> as the project type.
          </li>
          <li>
            In the <strong>Build Steps</strong> section, select{" "}
            <strong>Execute shell</strong> and enter the following command:
          </li>
          <pre>
            <code>echo "Hello Jenkins"</code>
          </pre>
          <li>
            Save the configuration and click <strong>Build Now</strong> from the
            left menu.
          </li>
          <li>
            Check the <strong>Build History</strong> to see the status of the
            job and view the console output.
          </li>
        </ol>
      </section>

      <section>
        <h2>Running the Application</h2>
        <p>Run the following commands to set up and run the application:</p>
        <ol>
          <li>Install dependencies using:</li>
          <pre>
            <code>npm install</code>
          </pre>
          <li>Run the application using:</li>
          <pre>
            <code>npm start</code>
          </pre>
          <p>
            Once the application is running, you can access it at the provided
            URL.
          </p>
        </ol>
      </section>

      <section>
        <h2>Pipeline Example: Checking NPM Installation</h2>
        <p>
          pipeline {"{"}
          <br />
          agent any
          <br />
          stages {"{"}
          <br />
          stage('Hello') {"{"}
          <br />
          steps {"{"}
          <br />
          sh 'npm --version'
          <br />
          {"}"}
          <br />
          {"}"}
          <br />
          {"}"}
          <br />
          {"}"}
        </p>
      </section>

      <section>
        <h2>Using Docker in Jenkins</h2>
        <p>
          To ensure NPM is available, use Docker to provide the required
          environment. Follow these steps:
        </p>
        <ol>
          <li>
            Install the “Docker Pipeline” plugin from the Jenkins dashboard
            under Manage Jenkins → Plugins.
          </li>
          <li>
            Just checking if npm is installed on the agent, and if you see the
            logs you will find npm is not found. Now to solve this issue we can
            do either of 2 things:
            <ol type="a">
              <li>One is to simply go to the agent and manually install NPM</li>
              <li>
                Other option is to use docker, which allows us to use a
                container, so let's learn how to use docker
              </li>
            </ol>
            Go to dashboard, then manage jenkins, and then go to plugins then go
            to available plugins and install “docker pipeline” plugin. Jenkins
            is a plugin monster, it's a skeleton which is to be fed with various
            plugins to make it effective.
          </li>
        </ol>
        <p>
          pipeline {"{"}
          <br />
          agent any
          <br />
          stages {"{"}
          <br />
          stage('w/docker') {"{"}
          <br />
          agent {"{"}
          <br />
          docker {"{"}
          <br />
          image 'node:18-alpine'
          <br />
          {"}"}
          <br />
          {"}"}
          <br />
          steps {"{"}
          <br />
          sh 'echo "With docker"'
          <br />
          sh 'npm --version'
          <br />
          {"}"}
          <br />
          {"}"}
          <br />
          {"}"}
          <br />
          {"}"}
        </p>
      </section>

      <section>
        <h2>Defining a Jenkins Pipeline in the Project</h2>
        <p>
          After build, it will be successful. Docker will be identified as an
          agent, it will pull the npm image if not present already and it will
          echo and print the statement and npm version and then the job
          finishes.
        </p>

        <p>
          Next, we want to define a Jenkins pipeline but in the project itself.
        </p>
        <p>
          So now go to the <strong>learn-jenkins-app</strong> repository which
          we cloned earlier from our forked GitHub repo and create a new file
          called <code>Jenkinsfile</code>. It has to be written exactly that
          way.
        </p>
        <p>
          Then we can go to Jenkins portal, use an existing job and script and
          copy (use hello world script):
        </p>
        <pre>
          <code>
            pipeline {"{"}
            agent any stages {"{"}
            stage('Hello') {"{"}
            steps {"{"}
            echo 'Hello, World!'
            {"}"}
            {"}"}
            {"}"}
            {"}"}
          </code>
        </pre>

        <p>Then commit changes and push to main.</p>

        <p>
          But how can we get this to run in Jenkins? Now we have to create a new
          item, then create a new pipeline. Now after going to pipeline section
          of the new job, we will select{" "}
          <strong>pipeline script from scm</strong>. SCM means source code
          management, basically telling the agent that we want to get the script
          from somewhere else. Select SCM as git, and put your forked project
          url in the url field (Code → HTTP → copy address), no need for any
          credentials as this is a public repo and Jenkins will be able to read
          this. Change branch specifier to <code>*/main</code>. Now save it and
          build, and you will see a successful build of the pipeline.
        </p>
      </section>

      <section>
        <h2>Building the Application with Jenkins</h2>
        <p>
          Now we shall see how to build this application. In the case of this
          application, we need to create a production build where essential
          files need to be minimized and many other steps.
        </p>

        <p>
          Now we shall come to our Jenkinsfile and rename the stage to ‘build’.
          We also need to use a docker image with node installed so as to run
          npm. We will use <code>node:18-alpine</code> as it’s much smaller and
          compact. Let's also do a <code>sh 'ls -la'</code> to understand what
          has happened in the workspace before and after.
        </p>

        <p>
          Instead of <code>npm install</code> we will use <code>npm ci</code>{" "}
          (designed for CI/CD servers) and then <code>npm run build</code>.
        </p>

        <p>The code looks something like this:</p>
        <pre>
          <code>
            pipeline {"{"}
            agent any stages {"{"}
            stage('Build') {"{"}
            agent {"{"}
            docker{"{"}
            image 'node:18-alpine' reuseNode true
            {"}"}
            {"}"}
            steps {"{"}
            sh ''' ls -la node --version npm --version npm ci npm run build ls
            -la '''
            {"}"}
            {"}"}
            {"}"}
            {"}"}
          </code>
        </pre>

        <p>
          If you hit build now for this job, you will see the exact output in
          the console output that you would have seen in the case of running{" "}
          <code>npm build</code> in your terminal, which is "compiled
          successfully".
        </p>
      </section>

      <footer>
        <p>
          Ready to dive deeper into Jenkins and CI/CD? Practice creating your
          own pipelines and use GitHub for version control to master CI/CD
          workflows!
        </p>
      </footer>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link
          to={{
            pathname: "/quiz/cicdQuiz",
          }}
          state={{ backTo: "/ci-cd", pageName: "CI CD" }}
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
    </div>
  );
}

export default CICD;
