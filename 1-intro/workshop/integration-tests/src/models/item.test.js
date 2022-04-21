const { expect } = require('@jest/globals');
const mongoose = require('mongoose');
const Item = require('./Item.js')

beforeAll(() => {
    mongoose.connect('mongodb://mongo:27017/docker-node-mongo', { useNewUrlParser: true })
})

afterAll(() => {
    mongoose.disconnect()
})

test('Add One Item', () => {
    const item = new Item({name: "Henry"});
    return item.save().then(
        result => {
          expect(result).toMatchObject({name: "Henry"});
    
        }
      );
});

test('Show previous created item', () => {
    return Item.find({name:"Henry"}).then(
        result => {
          expect(result[0]).toMatchObject({name: "Henry"});
    
        }
      );
});

test('Modify previous created item', async () => {
    const item = await Item.findOne({name: "Henry"})
    item.set('name', 'Léo')
    return item.save().then(
        result => {
          expect(result).toMatchObject({name: "Léo"});
        }
      );
});

test('Delete previous created item', () => {
    return Item.deleteOne({name:"Léo"}).then(
        result => {
          expect(result).toMatchObject({deletedCount: 1});
    
        }
      );
});