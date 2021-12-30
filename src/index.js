
import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

// import { Todo } from './class/todo.class.js';
// import { TodoList } from './class/todo-list.class';

export const todoList = new TodoList();

//todoList.todos.forEach(todo => crearTodoHtml( todo ));
todoList.todos.forEach(crearTodoHtml);

// const newTodo = new Todo ('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);
console.log('todos', todoList.todos );

//  const tarea = new Todo('Aprender JavaScript !!');


// todoList.nuevoTodo( tarea );


// console.log(todoList);

// crearTodoHtml( tarea );


//localStorage.setItem('mi-key','ABC123');
//sessionStorage.setItem('mi-key','1234566')

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
    
// }, 3000);