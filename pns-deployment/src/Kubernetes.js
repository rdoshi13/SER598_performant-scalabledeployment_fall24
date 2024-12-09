import React from 'react';
import './kubernetes.css';

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
        <p>After this tutorial, you will be able to do: </p>
        <ul>
          <li>
            Deploy a containerized application.
          </li>
          <li>
            Scale the deployment.
          </li>
          <li>
            Debug the containerized application.
          </li>
        </ul>

        <h3>What can Kubernetes do for you?</h3>
        <ul>
          <li>Containerization helps package software to enable frequent releases and updates and avoid application downtime.</li>
          <li>Kubernetes ensures that containerized applications run where and when needed.
          Access necessary resources and tools.</li>
        </ul>
      </section>

      <section className="prerequisites">
        <h2>Prerequisites</h2>
        <p>Before starting with Kubernetes, you should have:</p>
        <ul>
          <li>Basic knowledge of containers management tools like Docker.</li>
          <li>Understanding of REST API</li>
          <li>Basic understanding of YAML</li>
        </ul>
      </section>

      <section className="installation">
      <h2>Installation</h2>
      <h3> Let's see the steps to install the kubernetes in Windows </h3>

      <p>1. First we need to install kubectl in the windows system. Download the windows version.</p>
      <a
      href="https://kubernetes.io/releases/download/#binaries"
      target="_blank"
      rel="noopener noreferrer"
    >
      Stable releases of kubectl
    </a>
    <div className="info-block">
    <p><i>To add kube to the PATH, copy and paste the .exe file in C:\ drive by creating new folder named 'kube'.
      </i></p>
      <p><i>Open the environment variables, in system variables, add the path C:\kube and save it.
      </i></p>
    </div>


        <p>2. Run this command using the powershell to install the stable release of minikube.</p>
      <div className="code-block">
        
        <pre>
          <code>
            {`New-Item -Path 'c:\' -Name 'minikube' -ItemType Directory -Force
Invoke-WebRequest -OutFile 'c:\minikube\minikube.exe' -Uri 'https://github.com/kubernetes/minikube/releases/latest/download/minikube-windows-amd64.exe' -UseBasicParsing
`}
          </code>
        </pre>
       
      </div>
      <p>3. To add the path of minikube.exe.</p>
      <p><i>Run the powershell as administrator.</i></p>
      <div className="code-block">
        <pre>
          <code>
            {`$oldPath = [Environment]::GetEnvironmentVariable('Path', [EnvironmentVariableTarget]::Machine)
if ($oldPath.Split(';') -inotcontains 'C:\minikube'){
  [Environment]::SetEnvironmentVariable('Path', $('{0};C:\minikube' -f $oldPath), [EnvironmentVariableTarget]::Machine)
}
`}
          </code>
        </pre>
        
      </div>
      <p>4. To test whether minikube is properly installed in your system, run the command</p>
      <div className="code-block">
      <pre>
      <code>
            {`
minikube version
`}
          </code>
      </pre>
      </div>

      <p>5. To confirmation the installation and start the cluster, run the command</p>
      <div className="code-block">
      <pre>
      <code>
            {`minikube start
`}
          </code>
      </pre>
      </div>
      <p>The output should look like this:
      </p>
      <div className="code-block">
      <pre>
      <code>
            {`minikube v1.34.0 on Microsoft Windows 11 Home Single Language 10.0.22631.4460 Build 22631.4460
Using the docker driver based on existing profile

Starting "minikube" primary control-plane node in "minikube" cluster

Pulling base image v0.0.45 ...

Updating the running docker "minikube" container ...

Failing to connect to https://registry.k8s.io/ from inside the minikube container

To pull new external images, you may need to configure a proxy: https://minikube.sigs.k8s.io/docs/reference/networking/proxy/
Preparing Kubernetes v1.31.0 on Docker 27.2.0 ...

Verifying Kubernetes components...

- Using image gcr.io/k8s-minikube/storage-provisioner:v5

Enabled addons: default-storageclass, storage-provisioner

kubectl not found. If you need it, try: 'minikube kubectl -- get pods -A'

Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
`}
          </code>
      </pre>
      </div>

      <p>6. To get the status of cluster, run the command: </p>
      <div className="code-block">
      <pre>
      <code>
            {`minikube status
`}
          </code>
      </pre>
      </div>

      
      <p>7. To further diagnose the cluster problems, run the command: </p>
      <div className="code-block">
      <pre>
      <code>
            {`kubectl cluster-info
`}
          </code>
      </pre>
      </div>

    

      <p>8. To verify the node, as it should give a single node, run this command:</p>
      <div className="code-block">
      <pre>
      <code>
            {`kubectl get node
`}
          </code>
      </pre>
      </div>
      <p>Output should give NAME: minikube and Status: READY.</p>
    </section>


    <section className="springproject">
  <h2>Creating a Basic Spring Boot Project</h2>
  <p>
    Follow these steps to create a simple Spring Boot project:
  </p>

  <h3>Step 1: Clone the Project</h3>
  <p>Navigate to the following GitHub repository to get started with a pre-configured Spring Boot project:</p>
  <p>
    <a
      href="git clone https://github.com/spring-guides/gs-spring-boot.git"
      target="_blank"
      rel="noopener noreferrer"
    >
      Spring Boot Basic Repository
    </a>
  </p>
  <p>Clone the repository using the following command:</p>
  <pre>
    <code>
      {`git clone https://github.com/spring-guides/gs-spring-boot.git`}
    </code>
  </pre>

  <h3>Step 2: Import the Project into Your IDE</h3>
  <p>
    Open your favorite IDE (e.g., IntelliJ IDEA or Eclipse) and import the project as a Maven project.
  </p>

  <h3>Step 4: Run the Application</h3>
  <p>
    Run the application using your IDE or the following Gradle command:
  </p>
  <pre>
    <code>
      {`./gradlew bootRun`}
    </code>
  </pre>

  <h3>Step 5: Test the Endpoint</h3>
  <p>
    Open a browser or use a tool like Postman to test the endpoint:
  </p>
  <pre>
    <code>{`http://localhost:8080/`}</code>
  </pre>
</section>

<section className="integratingkubernetes">
  <h2>Create a Docker Image</h2>
  <p>1. Add a Dockerfile in the root directory of your project.</p>
  <div className="code-block">
      <pre>
      <code>
            {`# Use the official OpenJDK image as a base
FROM openjdk:17-jdk-slim

# Add a volume pointing to /tmp
VOLUME /tmp

# Copy the application JAR. jar file path is as per the project file structure.
COPY initial/build/libs/spring-boot-0.0.1-SNAPSHOT.jar app.jar

# Expose the port the app runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "/app.jar"]
`}
          </code>
      </pre>
      </div>
      <p>2. Then we will build the project by running this command:</p>
      <div className="code-block">
      <pre>
      <code>
            {`./gradlew build
`}
          </code>
      </pre>
      </div>

      <p>3. Then we will build the docker image by running this command:</p>
      <div className="code-block">
      <pre>
      <code>
            {`docker build -t hello-world-spring-boot .
`}
          </code>
      </pre>
      </div>

      <p>4. Run the docker container using this command: </p>
      <div className="code-block">
      <pre>
      <code>
            {`
docker run -p 8080:8080 hello-world-spring-boot
`}
          </code>
      </pre>
      </div>
      <p>You can verify this by running http://localhost:8080 in the browser.</p>


</section>

<section className = "deploywithkubernetes">
  <h2>Deplyoyment with Kubernetes</h2>
  <p>1. As we already have the minikube installed, we will now create k8s-deployment.yaml file for k8s deployment.</p>
  <p><i>Create this file in the seperate folder named 'k8s'.</i></p>

  <div className="code-block">
      <pre>
      <code>
            {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-world-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: hello-world
  template:
    metadata:
      labels:
        app: hello-world
    spec:
      containers:
      - name: hello-world
        image: <dockerhub-username>/hello-world-spring-boot:latest
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: hello-world-service
spec:
  selector:
    app: hello-world
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: LoadBalancer
`}
          </code>
      </pre>
      </div>

      <p>2. Then we will deploy the application to kubernetes by running this command:</p>
  <p><i>Before running this command, navigate to k8s folder.</i></p>

  <div className="code-block">
      <pre>
      <code>
            {`kubectl apply -f k8s-deployment.yaml
`}
          </code>
      </pre>
      </div>

      <p>3. To verify the deployment, we will run these commands.</p>
  <p><i>Before running these commands, navigate to main folder of project.</i></p>

  <div className="code-block">
      <pre>
      <code>
            {`kubectl get pods
kubectl get svc
`}
          </code>
      </pre>
      </div>
      <p className="info-block">
        Tip: After running 'kubectl get pods', you may get a common error which says "ImagePullBackOff". This means, docker image is not found which means we have to push the image to container registry (Docker Hub).

        To resolve this, we can do the following:
        <div className="code-block">
      <pre>
      <code>
            {` #tagging the image
docker tag hello-world-spring-boot:latest <your-dockerhub-username>/hello-world-spring-boot:latest
# push the image
docker push <your-dockerhub-username>/hello-world-spring-boot:latest
`}
          </code>
      </pre>
      </div>
        </p>

        <p>4. Then we will reapply the deployment to kubernetes by running this command:</p>
  
  <div className="code-block">
      <pre>
      <code>
            {`kubectl apply -f k8s-deployment.yaml
`}
          </code>
      </pre>
      </div>

      <p>5. Then, to communicate with the minikube after this change, we need to run these commands one by one :</p>
  
  <div className="code-block">
      <pre>
      <code>
            {`minikube docker-env
            @FOR /f "tokens=*" %i IN ('minikube docker-env') DO @%i
`}
          </code>
      </pre>
      </div>
      <p className="info-block">Why did we run this command?
        It provides instructions to point your terminal's docker-cli to the Docker Engine inside minikube. (Useful for building docker images directly inside minikube)
        This executes the environment variable configuration that minikube docker-env provides, but in a Command Prompt-compatible way.</p>

        <p>Now, if you will again run this command, <code>kubectl apply -f k8s-deployment.yaml
        </code> you should get the output as:  
        <div className="code-block">
      <pre>
      <code>
            {`hello-world-deployment configured
service/hello-world-service unchanged
`}
          </code>
      </pre>
      </div>
         </p>
         <p>6. Then we will again run this command to see if we get the docker image status as RUNNING and READY 1/1.</p>
  <div className="code-block">
      <pre>
      <code>
            {`kubectl apply -f k8s-deployment.yaml
`}
      </code>
      </pre>
      </div>
      <p>7. Then we will again run this command to see if we get the docker image status as RUNNING and READY 1/1.</p>
  <div className="code-block">
      <pre>
      <code>
            {`minikube service hello-world-service --url`}
      </code>
      </pre>
      </div>
</section>


    

      <footer className="App-footer">
        <p>&copy; 2024 Kubernetes Tutorial. All rights reserved.</p>
      </footer>
    </div>
  );

}

export default Kubernetes;
