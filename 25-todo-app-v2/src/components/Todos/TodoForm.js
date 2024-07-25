import { useState } from 'react';

import style from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={style.todoFormContainer}>
      <form onSubmit={onSubmitHandler} className={style.todoForm}>
        <input
          onChange={(event) => setText(event.target.value)}
          value={text}
          type="text"
          placeholder="Add a todo..."
        />
        <Button type="submit" title="submit">
          submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
