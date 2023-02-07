import { useState } from 'react';
import styles from './ToDoForm.module.css';
import Button from '../UI/Button';

function ToDoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <div className={styles.containerForm}>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Enter new ToDo" value={text} onChange={(e) => setText(e.target.value)} />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ToDoForm;
