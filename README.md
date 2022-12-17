/
-src/
index.js // server
models/
controllers/
middlewares/
services/
utils/
config/
-tests [later]

# Welcome to flight and services

## Project setup

    - clone the project to local
    - Execute `npm install` on the same path as of your root directory of the project
    - Create '.env' file in the root directory and add the following environment variable
    - `PORT=3000`
    - Inside the `src/config` folder create a new file `config.json` and then add the following peice of json

    ```
    {

"development": {
"username": "<YOUR_DB_LOGIN>",
"password": "<YOUR_DB_PASSWORD>",
"database": "Flights_Search_DB_DEV",
"host": "127.0.0.1",
"dialect": "mysql"
}

```

```
