import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';


// class TodoList extends React.Component {
//   constructor({receiveTodo, todos}) {
//     super();
//     this.todos = todos;
//     this.receiveTodo = receiveTodo;
//   }
//
//   todoTitles() {
//     return this.todos.map( (todo, idx) => <li key={idx}>{todo.title}</li>;
//     });
//   }
//
//   render () {
//     return (
//       <ul>
//         {this.todoTitles()}
//       </ul>
//     );
//   }
// }


const TodoList = ({receiveTodo, removeTodo, todos}) => {
  return (
    <div>
      <ul>
        {todos.map( (todo, idx) => <TodoListItem receiveTodo={receiveTodo} todo={todo} key={idx} removeTodo={removeTodo}/>)}
      </ul>
        {<TodoForm receiveTodo={receiveTodo}/>}
    </div>
  );
};

export default TodoList;
