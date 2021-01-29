# The-Meal Client
Client made with [VueJS](https://vuejs.org) using [The-Meal API](https://github.com/matheus-rib/the-meal-api)

Developed with [Docker](https://www.docker.com) (and Docker-Compose)

[Deployed in Heroku.](https://the-meal-client.herokuapp.com/#/)
## Table of Contents
  - [Requirements](#requirements)
  - [How to run](#how-to-run)
  - [Commands](#commands)
    - [Install dependencies](#install-dependencies)
    - [Run application](#run-application)
  - [Authors](#authors)

## Requirements
  - Docker (and docker-compose)

## How to run
  - Create `.env.local` file using `.env.local.example` as base
  - Install all dependencies ([check commands session](#commands))
  - Run the app ([check commands session](#commands))

## Commands
### Install dependencies
```bash
docker-compose run --rm app yarn
```

### Run application
```bash
docker-compose up
```

# Authors
  - Matheus Ribeiro