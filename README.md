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

- Build Docker image

```sh
docker build -t projet-devops .
```

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