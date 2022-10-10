const express = require("express");
const cors = require("cors");
const server = express();

const routes = require("./routes/user.js");
const config = require("./config/index.js");
config.installServerConfig.installServerConfig();

const PORT = process.env.PORT || 8080;

server.use(express.json());
server.use(cors());
server.use('/api', routes);

const installServer = () => {     
    server.listen(PORT);
    console.log(`Server is running on localhost:${PORT}.`);
    console.log(`MySQL database connection is successful.`);
}

installServer();
