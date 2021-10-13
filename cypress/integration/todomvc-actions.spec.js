import {TodomvcPage} from "../page-objects/todomvc-page";

const todomvcURL = 'http://todomvc-app-for-testing.surge.sh/';

describe('todo actions', () => {

    const todomvcPage = new TodomvcPage();

    beforeEach(() => {
        cy.visit(todomvcURL);
    });

    it('should add a new todo item to the list', () => {
        todomvcPage.addTodo('Study for the interview')
        cy.get(todomvcPage.todoLabel).should('have.text', 'Study for the interview');
        cy.get(todomvcPage.todoCheckbox).should('not.to.be.checked');
    });


    it('should strike through the completed todo item', () => {
        todomvcPage.addTodo('Clean your room')
        todomvcPage.completeTodo('Clean your room')
        cy.get(todomvcPage.todoCheckbox).should('be.checked');
        cy.get(todomvcPage.todoLabel).should('have.css', 'text-decoration-line', 'line-through');
    });

    it('should be able to add more than one todo', () => {
        const todosArr = ['Make the hotel reservation', 'Go grocery shopping', 'Clean the house'];
        todomvcPage.addMultipleTodos(todosArr);
        cy.get(todomvcPage.todoList).should('have.length', 3);
    });

    it('should clear all completed todos from the list', () => {
        const todosArr = ['TODO 1', 'TODO 2', 'TODO 3'];
        todomvcPage.addMultipleTodos(todosArr);
        todomvcPage.completeTodo('TODO 2');
        todomvcPage.clearCompletedTodos();
        cy.get(todomvcPage.todoList).should('have.length', 2);
    });

    it('should be able to destroy a todo even if it is not completed', () => {
        todomvcPage.addTodo('A TODO with a typo');
        todomvcPage.destroyTodo('A TODO with a typo');
        cy.get(todomvcPage.todoList).should('not.have.descendants', 'li');
    });

});
