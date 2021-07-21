const mongoose = require('mongoose');


const Restaurant = mongoose.model('Restaurant');

module.exports = app => {

    app.get('/restaurant/:id', async ( { params : { id : _id} }, res) => {
        try {
            const restaurants = await Restaurant.findOnde({ _id });
            res.json(restaurants);
        } catch(err) {
            console.error(err);
            throw new Error(err);
        }        
    });            

    app.get('/restaurant', async (req, res) => {
        try { 
            const restaurants = await Restaurant.find({});
            res.json(restaurants);
        } catch(err) {
            console.error(err);
            throw new Error(err);
        }
    });            

    app.post('/restaurant', async ( { body : { name, main_picture, description } }, res) => {
            const restaurant = new Restaurant({ name, main_picture, description });

        try {
            const newRestaurant = await restaurant.save();

            res.json(newRestaurant);

        } catch(err) {
            console.error(err);
            throw new Error('We could not save your restaurant');
        }
    });

    app.put('/restaurant/:id', async ( { params : { id : _id } }, res) => {
        
        try {
            const newRestaurant = await Restaurant.updateOne({ _id })

            res.json(newRestaurant);

        } catch(err) {
            console.error(err);
            throw new Error('We could not save your restaurant');
        }
    });

    app.delete('/restaurant/:id', async (req, res) => {
        try {
            await Restaurant.deleteOne({ _id });
        } catch(err) {
            console.error(err);
            throw new Error(err);
        }
    });
};