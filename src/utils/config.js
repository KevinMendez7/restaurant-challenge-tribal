
// Use of `dotenv` to handle environment variables in .env file
require('dotenv').config({
    path: process.env.DOTENV_CONFIG_PATH || null,
});

// The `config` object gets all environment variables from .env file.
// The reason is just require the necessary variables with desctructuring in the file when is needed.
const config = {
    mongoURI : process.env.MONGO_URI,
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT
};

module.exports = config;