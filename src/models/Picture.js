const mongoose = require('mongoose');
const { Schema } = mongoose;

// Picture schema created with mongoose schema
// is the schema that will save the restaurant pictures
const PictureSchema = new Schema({
    url: {
        type: String, 
        require: true        
      },    
    createdAt: { type: Date, default: Date.now },    
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
});

mongoose.model('Picture', PictureSchema);