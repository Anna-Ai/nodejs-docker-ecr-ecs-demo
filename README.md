# nodejs-docker-ecr-ecs-demo
Node.js, Docker, AWS ECR, ECS (EC2 Launch Type), and EC2 end-to-end deployment demo

# nodejs-docker-ecr-ecs-demo
Node.js, Docker, AWS ECR, ECS (EC2 Launch Type), and EC2 end-to-end deployment demo

End-to-End AWS ECS Deployment Demo (Node.js + Docker + Amazon ECR + Amazon ECS + EC2)
This end-to-end demo project demonstrates how to deploy a simple Node.js application from a local development environment to the AWS Cloud using Docker, Amazon ECR, Amazon ECS (EC2 Launch Type), and an Amazon EC2 instance. The objective is to successfully access the running application through the EC2 instance's public IPv4 address.
The project is divided into three major sections:

1. Local Development (PC)
   On the local computer:
   •	Create a simple Node.js web application.
   •	Build a Docker image for the application.
   •	Tag the Docker image.
   •	Push the Docker image to an Amazon Elastic Container Registry (ECR) repository.

2. AWS Cloud Deployment
   On the AWS Cloud:
   •	Create an Amazon ECS cluster using the EC2 Launch Type.
   •	Create an ECS Task Definition that references the Docker image stored in Amazon ECR.
   •	Create an ECS Service to deploy and manage the application on the EC2 instance.

3. Deployment Verification and Troubleshooting
   Verify that all AWS resources are configured and running correctly:
   •	Ensure the ECS Cluster, Task Definition, Service, and EC2 instance are in a healthy state.
   •	Verify ECS Task Definition contains correct port mapping
   •	Verify EC2 Security Group inbound rule to allow traffic to the application port (e.g, TCP port 3000 for app, TCP port 22 for SSH).
   •	Confirm that the Docker container is running successfully on the EC2 instance.

If all configurations are correct, the application will be accessible from both:
  •	Command Prompt (using curl)
    Run       curl http://localhost:3000   
    Display   Hello from ECS EC2 Docker Demo!

    Run       curl http://18.119.13.118:3000 
    Display   Hello from ECS EC2 Docker Demo!
    
  •	A web browser via the EC2 instance's public IPv4 address, e.g:
    http://<EC2-Public-IPv4>:3000
    Typing http://18.119.13.118:3000 in web browser address line, the content area will display: Hello from ECS EC2 Docker Demo!
  
 

