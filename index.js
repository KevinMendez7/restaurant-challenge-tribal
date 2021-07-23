// Main point of the rest api, the express framwork is implemented here, server is created and is started here

const express = require('express');
const cors = require('cors');
const { port } = require('./src/utils/config');
const connection = require('./src/utils/DatabaseConnection');

// The `connection` function is call to make the connection in the index file
connection();

// All `models` are called to load them with the connection
require('./src/models/Restaurant');
require('./src/models/Review');
require('./src/models/Picture');

const app = express();

app.use(express.json());
app.use(cors());

// All `routes` are mapped with the app express to separate logic.
require('./src/routes/RestaurantRoute')(app);
require('./src/routes/ReviewRoute')(app);
require('./src/routes/PictureRoute')(app);

// Route `/` will redirect you to frontend app home page.
app.get('/', (req, res) => {
    res.redirect('http://localhost:3000/');
});

app.listen(port || 3000, () => {
    console.log(`Server listen on port ${port || 3000}`);
})