import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ToDoForm from './components/ToDos/ToDoForm';
import ToDoList from './components/ToDos/ToDoList';
import ToDoActon from './components/ToDos/ToDoAction';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(todos.map((todo) => (todo.id == id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo })));
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodoHandler = (id) => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <ToDoForm addTodo={addTodoHandler}></ToDoForm>
      {!!todos.length && (
        <ToDoActon
          deleteCompletedTodo={deleteCompletedTodoHandler}
          resetTodo={resetTodoHandler}
          completedTodosCount={!!completedTodosCount}></ToDoActon>
      )}
      <ToDoList deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} todos={todos}></ToDoList>
      {!!completedTodosCount && (
        <h2>{`You have completed ${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'} `}</h2>
      )}
    </div>
  );
}

export default App;
