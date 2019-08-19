# Adform Coding Assignment

## Assignment
The candidate will create a microservice to serve an API

## Requirements
- The solution should be accessible from a public repository in Github.
- The solution will use Node.js, Express, and ES6.
- The solution will be deployable using Docker.

## Server requirements
- The microservice will serve an API to List Owners
- Read and Write Pets List Pets for an Owner Log transaction to a file
- The API can be implemented using either REST or GraphQL. GraphQL is preferred, but REST will be acceptable.

## Domain Model
![Domain](https://user-images.githubusercontent.com/10876540/63225012-a83dff00-c1fe-11e9-939e-54b9ec3a1ffc.PNG)

## Data
- No database is required, data for these entities can be stored as JSON in the file system.

## How to test the application
- The candidate will provide a 'client' application that will make API calls to the microservice to:
- List Owners Add a Pet Edit a Pet
- Retrieve an Owner and their Pets
- This client application could (but not mandatory) be implemented using mocha/chai.

## Deployment
- The solution should be deployable using Docker. Build process/script should follow best practices and create a Docker image

## Tech/framework used
<b>Built with</b>
- [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/)
- [GraphQL](https://graphql.org/)
- [docker](https://www.docker.com/)

## How to use?
Before proceeding make sure you have installed docker and docker-compose.
- To install docker and docker-compose, [Docker Compose](https://docs.docker.com/compose/)
- Clone the repository and then follow the commands.
```
$ cd %repo%
$ docker-compose up
```

- This will build and run the node.js container.
- You can also use the following command to further explore the resulting configuration.
```
$ docker ps
```
- To stop and remove the containers.
```
$ docker-compose down
```
## Testing API

- Navigate to http://localhost:3000 in a web browser to see your newly installed application.
