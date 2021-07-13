# Rental Company Project
- A movie rental company example.


## Features

- Create user
- User login
- Create movies
- Rent a movie
- Return a movie

## Documentation
If you want to check the api documentation without run the project, you can copy the `swagger.yaml` content and paste on [Swagger Editor](https://editor.swagger.io/).
## Installation

The project requires [Node.js](https://nodejs.org/) and [Docker](https://www.docker.com/) to run.

Install the dependencies and create the docker container.

```sh
npm i
docker-compose -f stack.yml up
```

## Run
With the container up, you can create the database and tables on [Adminer](https://www.adminer.org/). You can access Adminer in browser in `localhost:8081` and login with user and password.
The script to create database and tables is in the repository(`createStructure.txt`). After all, you can run the application.

```sh
npm start
```
The requests can be done by [Postman](https://www.postman.com/) or [Swagger](https://swagger.io/)( you can access it in `localhost:3000/api-docs`). The apis documentation can be found also on Swagger.


