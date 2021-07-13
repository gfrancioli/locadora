# Rental Company project
- A movie rental company example.


## Features

- Create user
- User login
- Create movies
- Rent a movie
- Return a movie

## Installation

The project requires [Node.js](https://nodejs.org/) and [Docker](https://www.docker.com/) to run.

Install the dependencies and create the docker container.

```sh
npm i
docker-compose -f stack.yml up
```

With the container up, you can create the database and tables on [Adminer](https://www.adminer.org/). You can access Adminer in browser in `localhost:8081` and login with user and password.
The script to create database and tables is in the repository. After all, you can run the application.
```sh
npm start
```
The requests can be done by [Postman](https://www.postman.com/) or [Swagger](https://swagger.io/)( you can access it in `localhost:3000/api-docs`). The apis documentation can be found also on Swagger.

