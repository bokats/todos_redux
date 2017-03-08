import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.todo.title;
    this.removeTodo = props.removeTodo;
    this.removeHandler = this.removeHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  removeHandler() {
    this.removeTodo(this.props.todo.id);
  }

  updateHandler() {
    const todoCopy = merge({}, this.props.todo);
    todoCopy.done = !this.props.todo.done;
    this.props.receiveTodo(todoCopy);
  }

  render() {
    const buttonText = this.props.todo.done ? "Undo" : "Done";
    return (
      <li>
        {this.title}
        <button onClick={this.removeHandler}>Remove Todo</button>
        <button onClick={this.updateHandler}>{buttonText}</button>
      </li>
    );
  }

}



// const TodoListItem = (props) => {
//   console.log(props);
//   return (
//     <li>
//       {props.todo.title}
//       <button onClick={props.removeTodo(props.todo.id)}>Remove Todo</button>
//     </li>
//
//   );
// };

export default TodoListItem;
