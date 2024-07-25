import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    // так как функция deleteTodo вызывается с аргументом, а нужно в слушатель добавить саму функцию, а не результат ее вызова, прописывается стрелочная функция
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
