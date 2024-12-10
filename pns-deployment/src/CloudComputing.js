import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function CloudComputing() {
  return (
    <div className="CloudComputing">
      {/* Navigation Buttons */}
    <div className="navigation-buttons">
        <Link to="/" className="home-button">Home</Link>
        <Link to="/containers" className="next-button">Containers</Link>
      </div>
      <h1>Cloud Computing</h1>
      
      <section>
      <h2>What is Cloud Computing?</h2>
        <p>Cloud computing makes it easy to access powerful computing resources over the Internet without the hassle of managing physical servers. The 'cloud' refers to a global network of servers hosted in data centers that power applications, databases, and various services. These servers aren’t floating in the sky—they’re housed in physical data centers, often in buildings near major cities.</p>

        <p>In the past, if you wanted to launch a website or application, you’d need to buy, set up, and maintain your own servers. This process took a lot of time, effort, and money. Cloud computing has changed all that. Now, you can "rent" servers and services as you need them. The cloud provider handles all the maintenance and infrastructure, so you can focus on your work. Once you’re done, you can stop your subscription, saving on unnecessary costs.</p>

        <p>Cloud computing isn’t just about hosting websites. It powers everything from data analytics and machine learning to gaming and mobile app development. Whether you're a small startup or a global company, the cloud helps you launch faster, save money, and scale your business effortlessly. Its services include data analytics, machine learning, Internet of Things (IoT), gaming, mobile development, and quantum computing.</p>

        <p>
          Cloud computing is a model that delivers computing services—such as storage, processing power, and applications—over the Internet. These services eliminate the need for businesses and individuals to maintain physical infrastructure, enabling scalability, flexibility, and cost efficiency. 
        </p>

        <h3>Core Concepts</h3>
        <ul>
          <li>
            <strong>On-Demand Self-Service:</strong> Users can access computing resources as needed, without requiring human intervention from the service provider.
          </li>
          <li>
            <strong>Broad Network Access:</strong> Resources are accessible over the Internet, enabling use across devices such as laptops, smartphones, and tablets.
          </li>
          <li>
            <strong>Resource Pooling:</strong> Providers serve multiple customers using a shared pool of resources, dynamically allocating resources as needed.
          </li>
          <li>
            <strong>Scalability and Elasticity:</strong> Resources can scale up or down automatically based on demand, ensuring efficient usage and cost savings.
          </li>
          <li>
            <strong>Pay-As-You-Go Pricing:</strong> Users pay only for the resources they use, helping them avoid unnecessary expenses.
          </li>
        </ul>

        <h3>Benefits of Cloud Computing</h3>
        <ul>
          <li><strong>Cost Savings:</strong> Cuts costs on hardware and maintenance with a flexible subscription-based model.</li>
          <li><strong>Flexibility:</strong> Delivers on-demand resources, enabling businesses to quickly adjust to workload changes.</li>
          <li><strong>Global Reach:</strong> Enables worldwide deployment with minimal latency by utilizing data centers distributed globally.</li>
          <li><strong>Reliability:</strong> Offers high uptime and automated backups, ensuring continuous availability of services.</li>
          <li><strong>Innovation:</strong> Frees up resources for businesses to focus on innovation instead of infrastructure management.</li>
        </ul>

        <h3>Common Use Cases</h3>
        <p>
          Cloud computing is widely used across industries for a variety of purposes:
        </p>
        <ul>
          <li>
            <strong>Web Hosting:</strong> Host websites and applications with scalable resources, ensuring reliability during traffic spikes.
          </li>
          <li>
            <strong>Data Storage:</strong> Store and retrieve data securely from anywhere, with options for automated backups.
          </li>
          <li>
            <strong>Big Data Analytics:</strong> Analyze large datasets efficiently using cloud-based data processing services.
          </li>
          <li>
            <strong>Machine Learning:</strong> Train and deploy machine learning models using tools provided by cloud platforms.
          </li>
          <li>
            <strong>Disaster Recovery:</strong> Implement fail-safe systems to recover data and operations in the event of disruptions.
          </li>
        </ul>
        <h3>Types of Cloud Computing</h3>
        <p>
          Cloud computing services can be broadly categorized into three types:
        </p>
        <ul>
          <li>
            <strong>Infrastructure as a Service (IaaS):</strong> IaaS provides the foundational infrastructure for your applications without requiring you to handle the physical maintenance of servers and data centers. With IaaS, you have full control over your virtual machines, storage, and networking, while the provider handles the hardware. Examples include Amazon EC2, Google Compute Engine, and Microsoft Azure Virtual Machines.
          </li>
          <li>
            <strong>Platform as a Service (PaaS):</strong> PaaS abstracts the infrastructure layer, offering tools to deploy and manage applications. It simplifies development by providing a platform with runtime environments, middleware, and libraries. This allows you to focus on building and deploying applications without worrying about the underlying infrastructure. Examples include AWS Elastic Beanstalk, Google App Engine, and Heroku.
          </li>
          <li>
            <strong>Software as a Service (SaaS):</strong> SaaS provides fully functional, ready-to-use software delivered over the Internet. These applications are managed and maintained entirely by the provider, making them ideal for end-users. SaaS eliminates the need for installation, updates, or troubleshooting. Examples include Gmail, Salesforce, Microsoft Office 365, and Dropbox.
          </li>
          <p>
          The table below illustrates the responsibilities in IaaS, PaaS, and SaaS. It highlights which components are managed by you and which are handled by the service provider.
        </p>
        <img src="https://td-mainsite-cdn.tutorialsdojo.com/wp-content/uploads/2020/08/IaaS-PaaS-SaaS.jpg" alt="Services table showing responsibilities for IaaS, PaaS, SaaS" />
        </ul>
      </section>
      
      <section>
  <h2>How to Create an EC2 Instance on AWS</h2>
  
  <ol>
    <li><strong>Sign in to the AWS Management Console:</strong> 
      <p>Go to the <a href="https://aws.amazon.com/console/" target="_blank" rel="noopener noreferrer">AWS Management Console</a> and log in using your credentials.</p>
    </li>
    <li><strong>Navigate to the EC2 Dashboard:</strong> 
      <p>Search for "EC2" in the AWS Management Console search bar and click on "EC2" under Services.</p>
    </li>
    <li><strong>Launch an EC2 Instance:</strong> 
      <p>Click the <strong>Launch Instance</strong> button and enter a name for your instance.</p>
    </li>
    <li><strong>Choose an Amazon Machine Image (AMI):</strong> 
      <p>Select <strong>Amazon Linux 2 AMI</strong> (Free Tier eligible).</p>
    </li>
    <li><strong>Select an Instance Type:</strong> 
      <p>Choose the <strong>t2.micro</strong> instance type (Free Tier eligible).</p>
    </li>
    <li><strong>Configure Instance Details:</strong> 
      <p>Leave the default settings for <strong>Network, Subnet, and Auto-assign Public IP</strong>.</p>
    </li>
    <li><strong>Add Storage:</strong> 
      <p>By default, 8 GB of General Purpose SSD (gp2) is allocated. Adjust if needed.</p>
    </li>
    <li><strong>Add Tags (Optional):</strong> 
      <p>Add key-value pairs for tags to identify your instance (e.g., <strong>Key:</strong> Name, <strong>Value:</strong> MyInstance).</p>
    </li>
    <li><strong>Configure Security Group:</strong> 
      <p>Create a new security group and allow <strong>SSH (port 22)</strong>. Optionally, allow <strong>HTTP (port 80)</strong> for web servers.</p>
    </li>
    <li><strong>Review and Launch:</strong> 
      <p>Review all settings, click <strong>Launch</strong>, and select a key pair. Download the private key file <code>.pem</code> and keep it secure.</p>
    </li>
    <li><strong>Connect to Your Instance:</strong> 
      <p>Use the following command to connect to your instance:</p>
      <pre>
        <code>
          ssh -i /path/to/your-key.pem ec2-user@{'<your-instance-public-ip>'}
        </code>
      </pre>
    </li>
  </ol>

  <h2>Example Code Snippet</h2>
  <pre>
    <code>
      {`// Example code for creating an EC2 instance using AWS SDK
const AWS = require('aws-sdk');

// Configure AWS with your access and secret keys. These are unique for all users.
AWS.config.update({
  accessKeyId: '<access key>',
  secretAccessKey: '<secret key>',
  region: 'us-east-1',
});

// EC2 instance parameters
const params = {
  ImageId: 'ami-0c55b159cbfafe1f0', // Example Amazon Linux 2 AMI
  InstanceType: 't2.micro',         // Free tier eligible instance
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


      
<section>
  <h2>Demo creating an EC2 instance</h2>
  <iframe
    src="https://codesandbox.io/p/devbox/romantic-snowflake-k8dsq1?embed=1&file=%2Findex.js"
    style={{
      width: '100%',
      height: '500px',
      border: '0',
      borderRadius: '4px',
      overflow: 'hidden',
    }}
    title="dawn-butterfly-qzrdkr"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  />
  <p><a href="https://codesandbox.io/p/devbox/dawn-butterfly-qzrdkr" target="_blank" rel="noopener noreferrer">EC2 instance demo in CodeSandBox.</a></p>
</section>


    </div>
  );
}

export default CloudComputing;