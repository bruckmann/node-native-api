# node-native-api

This is a api to get all the latest movies that are added to Netflix.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` = The port witch you desire to run the project 

`CONN_STRING`= The mongoDB connection string


## Run Locally

### First you need to setup the mongoDB service


Run the fallowing command

```bash
   docker run --name mongo  -p 27017:27017 -d mongo
```

### Then you just need to setup the service api

Clone the project

```bash
  git clone https://github.com/bruckmann/node-native-api
```

Go to the project directory

```bash
  cd node-native-api
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```
## Running Tests

To run tests, run the following command

```bash
  yarn test
```

## TO-DO

- [] Add tests to the existent functions
- [] Create the movies:post logic to registrate a movie
- [] Create the Dockerfile and docker-compose file to the services

