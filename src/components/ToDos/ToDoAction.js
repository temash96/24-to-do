import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './ToDoAction.module.css';

function ToDoActon({ deleteCompletedTodo, resetTodo, completedTodosCount }) {
  return (
    <div className={styles.TodosActionsContainer}>
      <Button title="ResetTodos" onClick={resetTodo}>
        <RiRefreshLine></RiRefreshLine>
      </Button>
      <Button title="ClearCompletedTotos" onClick={deleteCompletedTodo} disabled={!completedTodosCount}>
        <RiDeleteBin2Line></RiDeleteBin2Line>
      </Button>
    </div>
  );
}

export default ToDoActon;
