import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function CloudComputing() {
  return (
    <div className="CloudComputing">
      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <Link to="/" className="home-button">
          Home
        </Link>
        <Link to="/containers" className="next-button">
          Containers
        </Link>
      </div>
      <header className="App-header">
        <h1>Cloud Computing Tutorial</h1>
      </header>
      <section>
        <h2>Learning Outcomes</h2>
        <p>By the end of this tutorial, learners will be able to:</p>
        <ul>
          <li>
            Define cloud computing and its core concepts, like on-demand
            self-service, resource pooling, and scalability.
          </li>
          <li>
            Identify the different types of cloud computing services (IaaS,
            PaaS, SaaS) and explain their use cases with examples.
          </li>
          <li>
            Differentiate between the traditional on-premises IT infrastructure
            and cloud-based solutions.
          </li>
          <li>
            Create an EC2 instance on AWS using the AWS Management Console.
          </li>
          <li>
            Analyze real-world use cases of cloud computing, such as web
            hosting, big data analytics, and machine learning.
          </li>
          <li>
            Evaluate the cost-efficiency and flexibility offered by cloud
            computing for businesses of different sizes.
          </li>
        </ul>
      </section>
      <section>
        <h2>What is Cloud Computing?</h2>
        <p>
          Without having to deal with the headache of maintaining physical
          servers, cloud computing makes it simple to access robust computing
          resources via the Internet. The term 'cloud' describes a global
          network of servers housed in data centres that support databases,
          apps, and other services. These servers are physically located in data
          centres, frequently in buildings close to large cities; they are not
          floating in the sky.
        </p>

        <p>
          In the past, in order to establish a website or application, you had
          to purchase, install, and operate your own servers . A lot of money,
          time, and effort were spent to complete this process. All of that has
          altered as a result of cloud computing. Servers and services are now
          available for "rent" as needed. All infrastructure and maintenance are
          taken care of by the cloud provider, allowing you to concentrate on
          your job. You can terminate your subscription after you're finished,
          which will save you money.
        </p>

        <p>
          Website hosting is only one aspect of cloud computing. It drives
          everything from mobile app development and gaming to machine learning
          and data analytics. You can launch and scale your apps more quickly,
          and also save money on this process with cloud. It does not matter if
          you are a small startup or a Fortune 500 company. Data analytics,
          machine learning, gaming, mobile development, the Internet of Things
          (IoT), and quantum computing are some of its offerings.
        </p>

        <p>
          Cloud Computing provides services like storage and processing power
          using Internet. By removing the need for physical infrastructure
          maintenance, these services allow for cost effectiveness, scalability,
          and flexibility for both people and enterprises.
        </p>

        <h3>Core Concepts</h3>
        <ul>
          <li>
            <strong>On-Demand Self-Service:</strong> Users can access computing
            resources as needed, without requiring human intervention from the
            service provider.
          </li>
          <li>
            <strong>Broad Network Access:</strong> Resources are accessible over
            the Internet, enabling use across devices such as laptops,
            smartphones, and tablets.
          </li>
          <li>
            <strong>Resource Pooling:</strong> Providers serve multiple
            customers using a shared pool of resources, dynamically allocating
            resources as needed.
          </li>
          <li>
            <strong>Scalability and Elasticity:</strong> Resources can scale up
            or down automatically based on demand, ensuring efficient usage and
            cost savings.
          </li>
          <li>
            <strong>Pay-As-You-Go Pricing:</strong> Users pay only for the
            resources they use, helping them avoid unnecessary expenses.
          </li>
        </ul>

        <h3>Benefits of Cloud Computing</h3>
        <ul>
          <li>
            <strong>Cost Savings:</strong> Cuts costs on hardware and
            maintenance with a flexible subscription-based model.
          </li>
          <li>
            <strong>Flexibility:</strong> Delivers on-demand resources, enabling
            businesses to quickly adjust to workload changes.
          </li>
          <li>
            <strong>Global Reach:</strong> Enables worldwide deployment with
            minimal latency by utilizing data centers distributed globally.
          </li>
          <li>
            <strong>Reliability:</strong> Offers high uptime and automated
            backups, ensuring continuous availability of services.
          </li>
          <li>
            <strong>Innovation:</strong> Frees up resources for businesses to
            focus on innovation instead of infrastructure management.
          </li>
        </ul>

        <h3>Common Use Cases</h3>
        <p>
          Cloud computing is widely used across industries for a variety of
          purposes:
        </p>
        <ul>
          <li>
            <strong>Web Hosting:</strong> Host websites and applications with
            scalable resources, ensuring reliability during traffic spikes.
          </li>
          <li>
            <strong>Data Storage:</strong> Store and retrieve data securely from
            anywhere, with options for automated backups.
          </li>
          <li>
            <strong>Big Data Analytics:</strong> Analyze large datasets
            efficiently using cloud-based data processing services.
          </li>
          <li>
            <strong>Machine Learning:</strong> Train and deploy machine learning
            models using tools provided by cloud platforms.
          </li>
          <li>
            <strong>Disaster Recovery:</strong> Implement fail-safe systems to
            recover data and operations in the event of disruptions.
          </li>
        </ul>
        <h3>Types of Cloud Computing</h3>
        <p>
          Cloud computing services can be broadly categorized into three types:
        </p>
        <ul>
          <li>
            <strong>Infrastructure as a Service (IaaS):</strong> It is a cloud
            computing model that provides on-demand access to computing
            resources such as servers, storage, networking, and virtualization.
            IaaS is attractive because acquiring computing resources to run
            applications or store data the traditional way requires time and
            capital. You have full control over your virtual machines, storage,
            and networking, while the provider handles the hardware.Amazon EC2,
            Google Compute Engine, and Microsoft Azure Virtual Machines are some
            of the popular examples.
          </li>
          <li>
            <strong>Platform as a Service (PaaS):</strong> PaaS abstracts the
            infrastructure layer, offering tools to deploy and manage
            applications. It provides a platform with runtime environments,
            middleware, and libraries. So, now you can focus on building and
            deploying applications without worrying about the underlying
            infrastructure.AWS Elastic Beanstalk, Google App Engine, and Heroku
            are someof the popular examples.
          </li>
          <li>
            <strong>Software as a Service (SaaS):</strong> SaaS provides fully
            functional, ready-to-use software delivered over the Internet. These
            applications are managed and maintained entirely by the provider,
            making them ideal for end-users. SaaS eliminates the need for
            installation, updates, or troubleshooting.Gmail, Salesforce,
            Microsoft Office 365, and Dropbox are some of the popular examples.
          </li>
          <p>
            The table below illustrates the responsibilities in IaaS, PaaS, and
            SaaS. It highlights which components are managed by you and which
            are handled by the service provider.
          </p>
          <img
            src="https://td-mainsite-cdn.tutorialsdojo.com/wp-content/uploads/2020/08/IaaS-PaaS-SaaS.jpg"
            alt="Services table showing responsibilities for IaaS, PaaS, SaaS"
          />
        </ul>
      </section>

      <section>
        <h2>How to Create an EC2 Instance on AWS</h2>

        <ol>
          <li>
            <strong>Sign in to the AWS Management Console:</strong>
            <p>
              Go to the{" "}
              <a
                href="https://aws.amazon.com/console/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AWS Management Console
              </a>{" "}
              and log in using your credentials.
            </p>
          </li>
          <li>
            <strong>Navigate to the EC2 Dashboard:</strong>
            <p>
              Search for "EC2" in the AWS Management Console search bar and
              click on "EC2" under Services.
            </p>
          </li>
          <li>
            <strong>Launch an EC2 Instance:</strong>
            <p>
              Click the <strong>Launch Instance</strong> button and enter a name
              for your instance.
            </p>
          </li>
          <li>
            <strong>Choose an Amazon Machine Image (AMI):</strong>
            <p>
              Select <strong>Amazon Linux 2 AMI</strong> (Free Tier eligible).
            </p>
          </li>
          <li>
            <strong>Select an Instance Type:</strong>
            <p>
              Choose the <strong>t2.micro</strong> instance type (Free Tier
              eligible).
            </p>
          </li>
          <li>
            <strong>Configure Instance Details:</strong>
            <p>
              Leave the default settings for{" "}
              <strong>Network, Subnet, and Auto-assign Public IP</strong>.
            </p>
          </li>
          <li>
            <strong>Add Storage:</strong>
            <p>
              By default, 8 GB of General Purpose SSD (gp2) is allocated. Adjust
              if needed.
            </p>
          </li>
          <li>
            <strong>Add Tags (Optional):</strong>
            <p>
              Add key-value pairs for tags to identify your instance (e.g.,{" "}
              <strong>Key:</strong> Name, <strong>Value:</strong> MyInstance).
            </p>
          </li>
          <li>
            <strong>Configure Security Group:</strong>
            <p>
              Create a new security group and allow{" "}
              <strong>SSH (port 22)</strong>. Optionally, allow{" "}
              <strong>HTTP (port 80)</strong> for web servers.
            </p>
          </li>
          <li>
            <strong>Review and Launch:</strong>
            <p>
              Review all settings, click <strong>Launch</strong>, and select a
              key pair. Download the private key file <code>.pem</code> and keep
              it secure.
            </p>
          </li>
          <li>
            <strong>Connect to Your Instance:</strong>
            <p>Use the following command to connect to your instance:</p>
            <pre>
              <code>
                ssh -i /path/to/your-key.pem ec2-user@
                {"<your-instance-public-ip>"}
              </code>
            </pre>
          </li>
        </ol>

        <h3>Example Code Snippet</h3>
        <pre>
          <code>
            {`const AWS = require('aws-sdk');

// Configure AWS with your access and secret keys. These are unique for all users.
AWS.config.update({
  accessKeyId: '<access key>',
  secretAccessKey: '<secret key>',
  region: 'us-west-1',
});

// EC2 instance parameters
const params = {
  ImageId: 'ami-0c55b159cbfafe1f0', // The AMI must match the region. Check in your dashboard to confirm.
  InstanceType: 't2.micro',         // Free tier eligible instance. Use this to practice.
  MinCount: 1,
  MaxCount: 1,
};

// Create an EC2 instance
const ec2 = new AWS.EC2();

ec2.runInstances(params, (err, data) => {
  if (err) {
    console.error('Error launching EC2 instance:', err);
  } else {
    console.log('EC2 instance created:', data.Instances[0].InstanceId);
  }
});`}
          </code>
        </pre>
      </section>
      <Link
        to={{
          pathname: "/quiz/cloudComputingQuiz",
        }}
        state={{ backTo: "/cloud-computing", pageName: "Cloud Computing" }}
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

      <section>
        <h2>Demo creating an EC2 instance</h2>
        <iframe
          src="https://codesandbox.io/p/devbox/romantic-snowflake-k8dsq1?embed=1&file=%2Findex.js"
          style={{
            width: "100%",
            height: "500px",
            border: "0",
            borderRadius: "4px",
            overflow: "hidden",
          }}
          title="dawn-butterfly-qzrdkr"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
        <p>
          Note - For some reason, the embedded sandbox defaults to a Hello World
          code. If you want to try this, click on 'Open Editor' on the top-right
          corner.
        </p>
        <p>
          <a
            href="https://codesandbox.io/p/devbox/dawn-butterfly-qzrdkr"
            target="_blank"
            rel="noopener noreferrer"
          >
            My EC2 instance demo in CodeSandBox.
          </a>
        </p>
      </section>
      <section>
        <h2>References</h2>
        <p>
          I used the following sources to understand these concepts and to
          better explain them in this tutorial.
        </p>
        <ul>
          <li>
            <a
              href="https://tutorialsdojo.com/introduction-to-cloud-computing-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intro to Cloud Computing - TutorialsDojo
            </a>
          </li>
          <li>
            <a
              href="https://cloud.google.com/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Cloud Learn
            </a>
          </li>
        </ul>
      </section>
      <footer className="App-footer">
        <p>&copy; 2024 Cloud Computing Tutorial. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CloudComputing;
