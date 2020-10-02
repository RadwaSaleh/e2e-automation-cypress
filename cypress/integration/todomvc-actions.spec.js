const todomvcURL = 'http://todomvc-app-for-testing.surge.sh/';


describe('todo actions', () => {

    beforeEach(() => {
        cy.visit(todomvcURL);
    });

    it('should add a new todo item to the list', () => {
        cy.get('.new-todo').type('Study for the interview{enter}');
        cy.get('label').should('have.text', 'Study for the interview');
        cy.get('.toggle').should('not.to.be.checked');
    });


    it('should strike through the completed todo item', () => {
        cy.get('.new-todo').type('Clean your room{enter}');
        cy.get('.toggle').click();
        cy.get('.toggle').should('be.checked');
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
    });

    it('should be able to add more than one todo', () => {
        cy.get('.new-todo').type('Make the hotel reservation{enter}');
        cy.get('.new-todo').type('Go grocery shopping{enter}');
        cy.get('.new-todo').type('Clean the house{enter}');
        cy.get('.todo-list li').should('have.length', 3);
    });

    it('should clear all completed todos from the list', () => {
        for(let i = 3; i >= 1; i--){
            cy.get('.new-todo').type(`TODO ${i}{enter}`);
        }
        cy.get('.todo-list li:nth-child(1) .toggle').click();
        cy.contains('Clear').click();
        cy.get('.todo-list li').should('have.length', 2);
    });

    it('should be able to destroy a todo even if it is not completed', () => {
        cy.get('.new-todo').type('A TODO with a typo{enter}');
        cy.get('.todo-list li .destroy').invoke('show');
        cy.get('.todo-list li .destroy').click();
        cy.get('.todo-list').should('not.have.descendants', 'li');
    });

});
