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
![1](https://user-images.githubusercontent.com/10876540/63232644-7c516680-c25c-11e9-8593-d8a606467ed3.png)
![2](https://user-images.githubusercontent.com/10876540/63232645-7c516680-c25c-11e9-8be0-20cac7e4f4c9.png)
![3](https://user-images.githubusercontent.com/10876540/63232646-7c516680-c25c-11e9-9261-6f2b1b9abc86.png)
![5](https://user-images.githubusercontent.com/10876540/63232647-7ce9fd00-c25c-11e9-9a5b-efe27066695f.png)

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

- Navigate to http://localhost:3000 in a web browser to see the newly installed application.

## Screenshots

![1](https://user-images.githubusercontent.com/10876540/63237936-b16ab280-c276-11e9-8a49-052e8ccb12a3.png)
![2](https://user-images.githubusercontent.com/10876540/63237937-b2034900-c276-11e9-8054-dde481c2d8c4.png)
![3](https://user-images.githubusercontent.com/10876540/63237938-b29bdf80-c276-11e9-9b2a-247181463507.png)
![4](https://user-images.githubusercontent.com/10876540/63237939-b3347600-c276-11e9-9a1d-32d5face4df4.png)
![5](https://user-images.githubusercontent.com/10876540/63237982-dfe88d80-c276-11e9-91d3-626bb1d1aa8b.png)

## Query / Mutations

```
query getAllOwners {
  owners {
    id
    name
    email
    phone
    address
  }
}

```

```
mutation {
  createPet(input: {name: "Archie", colour: "Black", age: 4, breed: "Rottweiler", ownerid: 5}) {
    id
    name
    colour
    age
    breed
    ownerid
  }
}
```

```
mutation {
  updatePet(input: {id: "1f856f95-e86a-4aaa-8255-18cc309ae33c", name: "Daisy", colour: "Brown & White", age: 1, breed: "Beagle", ownerid: 5}) {
    id
    name
    colour
    age
    breed
    ownerid
  }
}

```

```
{
  ownerpet(id: 1) {
    id
    name
    phone
    email
    address
    pets {
      id
      name
      age
      colour
      breed
    }
  }
}

```
