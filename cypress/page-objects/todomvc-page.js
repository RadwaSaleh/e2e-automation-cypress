export class TodomvcPage{
    constructor() {
        this.newTodoInput = '.new-todo';
        this.todoLabel = 'label';
        this.todoCheckbox = '.toggle';
        this.todoList = '.todo-list li';
        this.clearCompletedBtn = '.clear-completed';
        this.destroyTodoBtn = '.todo-list li .destroy';
    }

    addTodo(todoText){
        cy.get(this.newTodoInput).type(todoText + '{enter}');
    }

    addMultipleTodos(todosArr){
        for(let i = 0; i < todosArr.length; i++){
            cy.get(this.newTodoInput).type(todosArr[i] + '{enter}');
        }
    }

    completeTodo(todoText){
        cy.get(this.todoList).find(this.todoLabel).contains(todoText).siblings(this.todoCheckbox).click();
    }

    clearCompletedTodos(){
        cy.get(this.clearCompletedBtn).click();
    }

    destroyTodo(todoText){
        cy.get(this.todoList).find(this.todoLabel).contains(todoText).siblings(this.destroyTodoBtn)
            .invoke('show').click();
    }

}
