import styles from './ToDoList.module.css';

import ToDo from './ToDo';

function ToDoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>TodoList is empty</h2>}
      {todos.map((todo) => (
        <ToDo key={todo.id} deleteTodo={deleteTodo} todo={todo} toggleTodo={toggleTodo}></ToDo>
      ))}
    </div>
  );
}

export default ToDoList;
