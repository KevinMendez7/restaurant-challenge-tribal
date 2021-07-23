const mongoose = require('mongoose');

const Review = mongoose.model('Review');
const Restaurant = mongoose.model('Restaurant');

// Review route work with Mongoose calling the Review model and using the functions findById, find, save and populate 
// to interact with mongodb.
module.exports = app => {    

  // GET REQUEST to Route `/review/:id` will return a review, you have to send a review id.
  app.get('/review/:id', async (req, res) => {
    try {
      const review = await Review.findById(req.params.id).populate('restaurant');
      res.json(review);
      
    } catch(err) {
      console.error(err);
      next('Something happen');
    }
  });

  // GET REQUEST to Route `/review` will return all reviews in the database.
  app.get('/review', async (req, res) => {
    try {
      const reviews = await Review.find({});      
      res.json(reviews);
      
    } catch(err) {
      console.error(err);
      next('Something happen');
    }
  });

  // You can also request reviews by restaurant to making a GET request to Route `/restaurant/:id/review`.
  //  will return all the restaurant reviews, you have to send a restaurant id.
  // The id will be validated is exists, if is a valid object id
    app.get('/restaurant/:id/review', async ({ params : { id : _id } }, res, next) => {
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

        const restaurant = await Restaurant.findOne({ _id }).populate('reviews');

        if(!restaurant) {
          return res.json({
            error: 'Restaurant with given id not found!'
          });
        }

        const { reviews } = restaurant;
        
        let msg = 'OK';

        if(!reviews.length > 0) {
          msg = `No reviews found for given restaurant(${_id})`
        }
        
        res.json({ data: reviews, msg });                      

      } catch(err) {
        console.error(err);
        next('Something failed');        
      }        
    });

    // You can create a review making a POST request to Route `/restaurant/:id/review` with the name of the user comment and your comment.
    //  will return the review created response, this operation has to save the id in the restaurant collection to be able to populate.
    app.post('/restaurant/:id/review', async ({ body, params : { id: _id } }, res) => {
      try {        
        const { name, comment } = body;
        

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
        const review = new Review({ name, comment, restaurant : restaurant._id });

        await review.save();

        restaurant.reviews.push(review._id);

        await restaurant.save();

        res.json(review);            
  
      } catch (err) {
        console.error(err);
        res.status(400).json(err);
      }
    });
};