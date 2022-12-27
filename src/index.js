const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require('./config/serverConfig');

const db = require('./models/index');


const CityRepository = require('./repository/city-repository');
const ApiRoutes = require('./routes/index')

const setupAndStartServer = async (PORT) => {
    const app = express();
    // const PORT = 3000;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
        if (process.env.SYNC_DB) {
            db.sequelize.sync({ alter: true });
        }
        // let cityRepo = new CityRepository()
        // cityRepo.createCity({ name: "Samastipur" })
    })
};

setupAndStartServer(PORT);