const mongoose = require('mongoose');
const { Schema } = mongoose;

const PictureSchema = new Schema({
    url: String,    
    createdAt: { type: Date, default: Date.now },    
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
});

mongoose.model('Picture', PictureSchema);