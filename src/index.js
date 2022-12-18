const express = require('express');
// require('dotenv').config()
// console.log(process.env);
const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async (PORT) => {
    const app = express();
    // const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
        let cityRepo = new CityRepository()
        // cityRepo.createCity({ name: "Samastipur" })
    })
};

setupAndStartServer(PORT);