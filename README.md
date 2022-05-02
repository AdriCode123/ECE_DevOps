# ECE - DevOps

> [DevOps Assignment](https://github.com/adaltas/ece-devops-2022-spring/blob/master/PROJECT-INSTRUCTIONS.md)

## Instructions

### Install

- Clone repository

```sh
# https
git clone https://github.com/AdriCode123/ECE_DevOps.git
```

- [Install dependencies for userapi](./user-api/README.md#installation)

- [Install Vagrant](iac/README.md#prerequisite)

- [Install Docker](https://www.docker.com/get-started)

- [Install Minikube](https://minikube.sigs.k8s.io/docs/start/) for Kubernetes

### Usage

- [Start userapi](./user-api/README.md#usage)

- [Use Vagrant](iac/README.md#usage)

- Create Docker image

1. build the docker image:

```sh
docker build -t projet-devops .
```
2. Check if your Docker container appears in the local Docker images:

```sh
docker images
```
The output: 
![cmd](C:\Users\33777\Documents\ECE cours\S8\devops\ECE_DevOps\image\docker_image_cmd.png)

3. Run the container with the following command:   

![cmd](C:\Users\33777\Documents\ECE cours\S8\devops\ECE_DevOps\image\docker-run-cmd.png)

4. Check if the container is running (and save the container ID) with the following command:

```
docker ps
```

The output: 
![cmd](C:\Users\33777\Documents\ECE cours\S8\devops\ECE_DevOps\image\docker-image-ps.png)


- Push Docker image to Docker Hub

1. Register on [Docker Hub](https://hub.docker.com/)
2. Tag the container:

![cmd](C:\Users\33777\Documents\ECE cours\S8\devops\ECE_DevOps\image\Image-tag.png)

3. Log in to Docker Hub:

![cmd](C:\Users\33777\Documents\ECE cours\S8\devops\ECE_DevOps\image\docker-login.png)

4. Push the docker image to Docker Hub:

![cmd](C:\Users\33777\Documents\ECE cours\S8\devops\ECE_DevOps\image\docker-image-push.png)

The image is now on the Docker Hub 

![cmd](C:\Users\33777\Documents\ECE cours\S8\devops\ECE_DevOps\image\docker-hub.png)


- Using Docker Compose

```sh
docker-compose up
```

### Test

- [Test userapi](./user-api/README.md#testing)

## Tools

- [Node.js](https://nodejs.org/en/)
- [Heroku](https://project-dev-ops.herokuapp.com/)
- [Vagrant _(ubuntu/trusty64)_](https://www.vagrantup.com/)
    - [Ansible](https://docs.ansible.com/ansible/latest/index.html)
- [Docker Hub](https://hub.docker.com)
- [Kubernetes](https://kubernetes.io/)
- [Istio](https://istio.io/)
    - [Kiali](https://kiali.io/)
    - Prometheus

## Credits

Projet codé par celiadlg et AdriCode123
Supervisé par Sergei Kudinov