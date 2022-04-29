const { ToDo } = require("../toDoModel");

describe("ToDo Schema", function () {
  test("Create Schema", function () {
    const toDo = new ToDo({ text: "Vaisselle",done:true});
    expect(toDo.text).toEqual("Vaisselle");
  });
  test("Create Schema without all", function () {
    const toDo = new ToDo({ text: "Vaisselle"});
    expect(toDo.text).toEqual("Vaisselle");
  });
});
