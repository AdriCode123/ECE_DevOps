# User API web application

It is a basic NodeJS web application exposing REST API that creates and stores user parameters in [Redis database](https://redis.io/).

## Functionality

1. Start a web server
2. Create a user

## Installation

This application is written on NodeJS and it uses Redis database.

1. [Install NodeJS](https://nodejs.org/en/download/)

2. [Install Redis](https://redis.io/download)

3. Install application

Go to the root directory of the application (where `package.json` file located) and run:

```
npm install 
```

After installation, start Redis server:

- **Windows:** double click on `redis-server.exe` file (keep it open)
- **MacOS and Linux:** `redis-server`

![redis exe](C:\Users\33777\Documents\ECE cours\S8\devops\ECE_DevOps\image\redis.png)

Test if the Redis server is running:

- **Windows:** double click on `redis-cli.exe` and run the `ping` command inside the REPL
- **MacOS and Linux:** run in a new terminal window `redis-cli ping` (should answer with "PONG")

For us, it is well running : 
![redis running](C:\Users\33777\Documents\ECE cours\S8\devops\ECE_DevOps\image\redis_ping.png)

## Usage

1. Start a web server

From the root directory of the project run:

```
npm start
```

It will start a web server available in your browser at http://localhost:3030.

2. Create a user

Send a POST (REST protocol) request using terminal:

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"sergkudinov","firstname":"sergei","lastname":"kudinov"}' \
  http://localhost:3030/user
```

It will output:

```
{"status":"success","msg":"OK"}
```

Another way to test your REST API is to use [Postman](https://www.postman.com/).

3. Delete a user

You can also choose to delete a user


## Testing

From the root directory of the project, run:

```
npm test
```

## Author

Sergei Kudinov   
Célia Delagoutte
Adrien Mezzarobba
