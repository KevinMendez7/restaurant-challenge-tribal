const mongoose = require('mongoose');
const { validateUrl } = require('../utils/validations');


const Picture = mongoose.model('Picture');
const Restaurant = mongoose.model('Restaurant');

module.exports = app => {    

    // GET request to Route `/restaurant/:id/pictures`.
    // will return all the restaurant pictures, you have to send a restaurant id.
    // The id will be validated is exists, if is a valid object id
    app.get('/restaurant/:id/pictures', async ({ params: { id: _id }}, res) => {
        try {
            if(!mongoose.isValidObjectId(_id)) {
                return res.json({
                  error: 'param id is not valid, must be a single String of 12 bytes or a string of 24 hex characters'
                });
            }
    
            if(!_id) {
                return res.json({
                    error: 'Restaurant param id is required for looking reviews'
                });
            }
    
            const restaurant = await Restaurant.findOne({ _id }).populate('pictures');
            
            if(!restaurant) {
                return res.json({
                    error: 'Restaurant with given id not found!'
                });
            }

            const { pictures } = restaurant;

            let msg = 'OK';

            if(!pictures.length > 0) {
            msg = `No pictures found for given restaurant(${_id})`
            }
            
            res.json({ data: pictures, msg });      

        } catch(err) {
            console.error(err);
            next('Something failed'); 
        }        
    });    

    // You can create a pictures making a POST request to Route `/restaurant/:id/pictures` with the url of the image.
    //  will return the picture created response, this operation has to save the id in the restaurant collection to be able to populate.
    //@method is not implemented in frontend
    app.post('/restaurant/:id/pictures', async ({ body : { url }, params: { id: _id }}, res) => {        
        try {
            if(!mongoose.isValidObjectId(_id)) {
                return res.json({
                  error: 'param id is not valid, must be a single String of 12 bytes or a string of 24 hex characters'
                });
            }
    
            if(!_id) {
                return res.json({
                    error: 'Restaurant param id is required for looking reviews'
                });
            }
    
            const restaurant = await Restaurant.findOne({ _id });
            
            if(!restaurant) {
                return res.json({
                    error: 'Restaurant with given id not found!'
                });
            }

            const picture = new Picture({ url, restaurant: restaurant._id });
            const newPicture = await picture.save();

            restaurant.pictures.push(newPicture._id);

            await restaurant.save();

            res.json(newPicture);
        } catch(error) {
            console.error(error);
            throw new Error(error);
        }   

    });
};