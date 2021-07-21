const express = require('express');
const cors = require('cors');
const { port } = require('./src/config');
const connection = require('./src/utils/DatabaseConnection');

connection();

require('./src/models/Restaurant');
require('./src/models/Review');
require('./src/models/Picture');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/', (req, res, next) => {
    next();
});

require('./src/routes/RestaurantRoute')(app);
require('./src/routes/ReviewRoute')(app);
require('./src/routes/PictureRoute')(app);


app.get('/', (req, res) => {
    res.send('Welcome to restaurant api');
});

app.listen(port || 3000, () => {
    console.log(`Server listen on port ${port || 3000}`);
})