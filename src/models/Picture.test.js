const mongoose = require('mongoose')
const databaseName = 'test'

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`
  await mongoose.connect(url, { useNewUrlParser: true })
})
require('./Picture');

describe('Picture Model', () => {
    it('testing', () => {
        const picture = new Picture({ url: 'asdasd'});

        jest.spyOn(Picture, 'findOne').mockImplementationOnce(() => Promise.resolve(picture));


        const pic = picture.findOne({ url: asdasd});
        console.log(pic)

    });
});