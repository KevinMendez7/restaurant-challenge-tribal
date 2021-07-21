const mongoose = require('mongoose');
const { Schema } = mongoose;

const RestaurantSchema = new Schema({    
    name: String,
    main_picture: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    pictures: [{ type: Schema.Types.ObjectId, ref: 'Picture' }]
});

mongoose.model('Restaurant', RestaurantSchema);