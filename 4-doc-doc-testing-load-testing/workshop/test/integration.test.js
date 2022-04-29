
const { ToDo } = require('../toDoModel.js')
const mongoose = require('mongoose');

beforeAll(() => {
    mongoose.connect("mongodb://mongo:27017/toDoApp", { useNewUrlParser: true })
})

afterAll(() => {
    mongoose.disconnect()
})


test('create & save toDo successfully', () => {
    var toDoData = {text: "Vaisselle",done:true};
    const validToDo = new ToDo(toDoData);
    return validToDo.save().then(
        result => {
            expect(result._id).toBeDefined();
            expect(result.text).toBe(toDoData.text)
        }
        );
});

test('insert toDo successfully, but the field does not defined in schema should be undefined', () => {
    const toDoWithInvalidField = new ToDo({ text: "Vaisselle",done:true, nickname: 'Henry Léo' });
    return toDoWithInvalidField.save().then(
        result => {
            expect(result._id).toBeDefined();
            expect(result.nickkname).toBeUndefined();
        }
    );
});

