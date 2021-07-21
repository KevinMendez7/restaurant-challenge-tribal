require('dotenv').config();

const config = {
    mongoURI : process.env.MONGO_URI,
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT
};

module.exports = config;