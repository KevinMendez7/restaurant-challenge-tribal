const mongoose = require('mongoose');
const { mongoURI, nodeEnv } = require('./config');

// The `connection` function make a connection to MongoDb Database
// It takes the `mongoURI` from environment variables, if connection is successfull should print MongoDb connected.
const connection = async _ => {

    try {
        mongoose.Promise = global.Promise;

        if(Object.is(nodeEnv, 'development')) {
            mongoose.set('debug',true);
        }
        
        const connection = await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        if(connection) {            
            console.log('MongoDb connected');
        }
    } catch(err) {
        console.log(err);
        throw new Error('Error trying to connect to database');
    }    
}

module.exports = connection;
