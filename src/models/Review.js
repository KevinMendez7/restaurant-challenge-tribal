const mongoose = require('mongoose');
const { Schema } = mongoose;

// Reviews schema created with mongoose schema
// this schema has all the comments created by the users to give their opinion of the restaurant
const ReviewSchema = new Schema({    
    name: String,
    comment: String,
    createdAt: { type: Date, default: Date.now },        
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
});

mongoose.model('Review', ReviewSchema);