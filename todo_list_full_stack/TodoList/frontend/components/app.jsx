import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';

// const App = () => (
//   <section>
//     <h1>Hello2</h1>
//   </section>
// );

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
