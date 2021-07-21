const mongoose = require('mongoose');


const Picture = mongoose.model('Picture');

module.exports = app => {    

    app.get('/restaurant/:id/pictures', async (req, res) => {
        const pictures = await Picture.find({ _restaurants : req.params.id });

        res.send(restaurants);
    });    
};