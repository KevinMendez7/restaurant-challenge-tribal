const mongoose = require('mongoose');


const Restaurant = mongoose.model('Restaurant');

module.exports = app => {

    // GET request to Route `/restaurant/:id/ will return the informacion about the restaurant like title and description`.
    // you have to send a restaurant id.
    app.get('/restaurant/:id', async ( { params : { id : _id} }, res) => {
        try {
            const restaurants = await Restaurant.findOne({ _id });
            res.json(restaurants);
        } catch(err) {
            console.error(err);
            throw new Error(err);
        }        
    });            

    // GET request to Route `/restaurant`.
    //  will return all the restaurants in the database.
    app.get('/restaurant', async (req, res) => {
        try { 
            const restaurants = await Restaurant.find({});
            res.json(restaurants);
        } catch(err) {
            console.error(err);
            throw new Error(err);
        }
    });            

    // POST request to Route `/restaurant/ with name, main_picture and description body will create a new restaurant`.
    // @Method is not implemented in frontend.
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

    // DELETE request to Route `/restaurant/:id will remove the restaurant with the given id`.
    // @Method is not implemented in frontend.
    app.delete('/restaurant/:id', async (req, res) => {
        try {
            await Restaurant.deleteOne({ _id });
        } catch(err) {
            console.error(err);
            throw new Error(err);
        }
    });
};