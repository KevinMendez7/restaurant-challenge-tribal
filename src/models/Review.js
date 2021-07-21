const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReviewSchema = new Schema({    
    name: String,
    comment: String,
    createdAt: { type: Date, default: Date.now },        
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
});

mongoose.model('Review', ReviewSchema);