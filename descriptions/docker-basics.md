# Docker basics

## Prerequisites

1. Install [Docker](https://docs.docker.com/engine/install/)
2. Create Docker Hub account [Docker Hub](https://hub.docker.com/)

**Details:**

1. Create .dockerignore file and list all files that should be ignored by Docker
2. Create Dockerfile that will be used for building image of express application
3. Create Dockerfile that will be used for building image of PostgreSQL database. Migrate database schema and seed default data
4. Create docker-compose.yml file that will build express application and PostgreSQL database. Specify custom network that will be used for communication between application and database containers
5. Push built images to your private repository on Docker Hub