import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Containers() {
  return (
    <div className="Containers">
       {/* Navigation Buttons */}
       <div className="navigation-buttons">
        <Link to="/cloud-computing" className="home-button">
        Cloud Computing
        </Link>
        <Link to="/kubernetes" className="next-button">
        Kubernetes
        </Link>
      </div>
      <h1>Containers</h1>

      <section>
        <h2>Topic</h2>
        <p>
        A major challenge in software development is ensuring that an application performs consistently across various environments. Traditionally, this issue was addressed using virtual machines (VMs), but they are often resource-intensive and cumbersome. 
        Containers emerged as a more efficient and lightweight solution to this problem. 
        By encapsulating an application and its dependencies, containers provide a consistent computing environment that operates seamlessly, regardless of where it is deployed.    </p>
      </section>

      <section>
        <h2>Primary Terminologies</h2>
        <ul>
        <li>
  <strong>Containerization</strong>
  <p>
    Containerization is the process of packaging an application and its dependencies into a container. 
    This ensures that the application runs consistently across different environments. Containers are lightweight, portable, and help with isolation, making them ideal for microservices and cloud-based applications.
  </p>
</li>

<li>
  <strong>Container Image</strong>
  <p>
    A container image is a lightweight, standalone, and executable software package that includes everything needed to run an application: 
    code, runtime, libraries, and system tools. It is a blueprint for creating containers and is stored in a container registry.
  </p>
</li>

<li>
  <strong>Orchestration</strong>
  <p>
    Orchestration in Kubernetes refers to the automated arrangement, coordination, and management of containerized applications. 
    Kubernetes ensures containers are deployed, scaled, and maintained in the desired state, making application management more efficient.
  </p>
</li>

<li>
  <strong>Container Registry</strong>
  <p>
    A container registry is a centralized repository where container images are stored, managed, and shared. 
    Public registries like Docker Hub and private registries are commonly used for hosting images, which can then be pulled by Kubernetes for deployment.
  </p>
</li>

<li>
  <strong>Container Runtime</strong>
  <p>
    A container runtime is software that runs and manages containers on a host system. 
    Examples include Docker, CRI-O, and containerd. Kubernetes uses the runtime to pull container images, start, stop, and manage containers on nodes.
  </p>
</li>

  </ul>
  </section>

      <section>
        <h2>What is Containers?</h2>
        <img
    src="https://dotnettutorials.net/wp-content/uploads/2020/08/What-are-Containers-in-Cloud-Computing.png?ezimgfmt=rs:372x202/rscb8/ngcb8/notWebP"
    alt="Containers in Cloud Computing"
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '20px 0',
    }}/>
        <ul>
    <li>
      <strong>Definition and Functionality:</strong>
      <p>
        A container is a lightweight, standalone, and executable software package that encapsulates an application along with its dependencies, 
        such as libraries, configuration files, and binaries. It ensures the application can run reliably and consistently, 
        regardless of the deployment environment.
      </p>
    </li>
    <li>
      <strong>Consistency Across Environments:</strong>
      <p>
        Containers guarantee that an application behaves the same way across different environments, whether it is running on a developer's laptop, 
        in a testing setup, or on a production server. This eliminates the "it works on my machine" problem often faced in software development.
      </p>
    </li>
    <li>
      <strong>Isolation from Host System:</strong>
      <p>
        By isolating the application from the host system, containers remove dependencies on the host's operating system settings or installed software. 
        Instead, everything the application requires is packaged within the container itself, providing a self-contained runtime environment.
      </p>
    </li>
    <li>
      <strong>Efficiency Compared to Virtual Machines:</strong>
      <p>
        Unlike traditional virtual machines (VMs), which include a full operating system along with the application, containers share the host 
        operating system kernel. This makes containers more resource-efficient and faster to start up, allowing for greater scalability and performance.
      </p>
    </li>
    <li>
      <strong>Portability and Flexibility:</strong>
      <p>
        Containers can run seamlessly on any platform supporting container runtimes, including public and private clouds, hybrid environments, 
        and on-premises data centers. This portability makes them an essential tool for modern DevOps practices and cloud-native application development.
      </p>
    </li>
  </ul> 
      </section>

      <section>
        <h2>Containers vs Virtual Machines</h2>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Containers</th>
      <th>Virtual Machines (VMs)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Architecture</td>
      <td>All containers share the host OS kernel, with isolated user spaces.</td>
      <td>A hypervisor runs on the host OS and includes a full guest OS with virtualized hardware.</td>
    </tr>
    <tr>
      <td>Boot Time</td>
      <td>Boots in seconds as they do not require a full OS.</td>
      <td>Longer boot times since the full OS needs to be initialized.</td>
    </tr>
    <tr>
      <td>Isolation</td>
      <td>Provides process-level isolation, which is less strong but sufficient for many use cases.</td>
      <td>Provides strong isolation as each VM includes its own OS.</td>
    </tr>
    <tr>
      <td>Resource Usage</td>
      <td>Consumes fewer resources by sharing the host OS kernel and using only required binaries and libraries.</td>
      <td>Consumes more resources due to the overhead of running a full OS for each VM.</td>
    </tr>
  </tbody>
</table>
<img
    src="https://i0.wp.com/www.upnxtblog.com/wp-content/uploads/2017/09/container2.png?resize=638%2C343"
    alt="Containers in Cloud Computing"
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '20px 0',
    }}/>
      </section>

      <section>
        <h2>What is Containerization?</h2>
       <p>Containerization is the process of packaging an application along with all its dependencies—such as libraries, configuration files, and binaries—into a single container. This ensures the application runs consistently across different computing environments, from development to testing and production. 
        In essence, containerization leverages the host operating system's kernel to run multiple isolated instances of applications on the same machine, eliminating the need for a full operating system for each instance. 
        This makes it a lightweight, efficient, and scalable solution for deploying applications.
        Containerization not only improves portability and consistency but also enhances resource utilization. By sharing the host OS kernel, containers significantly reduce overhead compared to traditional virtual machines. Additionally, containers support modern software practices such as microservices architecture, where applications are decomposed into smaller, manageable components that can be independently developed, tested, and deployed. 
        Combined with orchestration tools like Kubernetes, containerization becomes a cornerstone of DevOps, enabling rapid scaling, seamless updates, and efficient resource management.</p>
      </section>

      <section>
        <h2>Use Cases of Containerization</h2>
        <p>
          A placeholder for an interactive sandbox where users can try cloud
          computing demos. This could use a real-time editor in the future.
          <img
    src="https://media.licdn.com/dms/image/v2/D5612AQE4PAq43JAJGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1700701203965?e=2147483647&v=beta&t=Lt27sRPuA8indsMLl4ivWJieXco-Xy4PvE7uDfe4A3w"
    alt="Containers in Cloud Computing"
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0',
    }}/>
        </p>
        <ul>
    <li>
      <strong>Microservices Deployment:</strong>
      <p>
        Containers are ideal for microservices architecture, as they allow each service to run independently in its own container. 
        This simplifies scaling, updating, and managing individual services.
      </p>
    </li>
    <li>
      <strong>Continuous Integration and Delivery (CI/CD):</strong>
      <p>
        Containers streamline CI/CD processes by offering consistent environments across development, testing, and production, 
        reducing deployment errors and improving efficiency.
      </p>
    </li>
    <li>
      <strong>Cloud-Native Applications:</strong>
      <p>
        Containers form the backbone of cloud-native applications, offering portability across different cloud providers 
        and ensuring applications run seamlessly in diverse environments.
      </p>
    </li>
    <li>
      <strong>Development and Testing:</strong>
      <p>
        Containers simplify the setup of consistent development and testing environments, eliminating the "it works on my machine" 
        problem and enhancing team collaboration.
      </p>
    </li>
    <li>
      <strong>Modernizing Legacy Applications:</strong>
      <p>
        Containers enable the transformation of legacy applications into portable and manageable packages, making it easier to 
        deploy them on modern infrastructure with improved efficiency.
      </p>
    </li>
  </ul>
      </section>

      <footer className="App-footer">
        <p>
          Ready to dive deeper into Containers Practice creating your
          own containers, images!
        </p>
      </footer>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Link
        to={{
          pathname: "/quiz/containersQuiz",
        }}
        state={{ backTo: "/containers", pageName: "Containers" }}
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

export default Containers;
