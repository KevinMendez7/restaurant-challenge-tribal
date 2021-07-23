const mongoose = require('mongoose');
const { Schema } = mongoose;

// Restaurant schema created with mongoose schema
// this schema has all the information about every restaurant in the database, and handle the relation with reviews and pictures
const RestaurantSchema = new Schema({    
    name: String,
    main_picture: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    pictures: [{ type: Schema.Types.ObjectId, ref: 'Picture' }]
});

mongoose.model('Restaurant', RestaurantSchema);