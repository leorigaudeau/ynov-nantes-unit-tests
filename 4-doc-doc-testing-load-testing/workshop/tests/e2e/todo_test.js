Feature('Todo list');

Scenario('Test Todo Creation', ({ I }) => {
    I.amOnPage('http://localhost:5000');
    I.fillField('#newTODO','Do the dishes');
    I.click('#create-todo');
    I.see('Do the dishes', locate('#todo-body').last())
});

Scenario('Test Todo Check', ({ I }) => {
    I.amOnPage('http://localhost:5000');
    I.click(locate('#todo-body tr').last().find('.btn'));
    I.see('Do the dishes', locate('#done-body tr').last())
});