import React from 'react';
import uniqueId from '../../util/util.js';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: uniqueId(), title: "", body: "", done: false};
    this.receiveTodo = props.receiveTodo;
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(key){ //currying
    return (event) => {
      this.setState({ [key]: event.currentTarget.value });
    };
  }

  submitHandler(event) {
    event.preventDefault();
    console.log(this.state, "the real one");
    this.receiveTodo(this.state);
    this.setState({id: uniqueId(), title: "", body: "", done: false});
  }

  render() {
    return(
      <form onSubmit={this.submitHandler}>
        <label>
          Title:
          <input onChange={this.changeHandler('title')} value={this.state.title} />
        </label>
        <label>
          Body:
          <input onChange={this.changeHandler('body')} value={this.state.body} />
        </label>
          <input type="submit" value="Create Todo!" />
      </form>
    );
  }
}
export default TodoForm;
