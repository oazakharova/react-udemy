import Todo from './Todo';
import style from './TodoList.module.css';

function TodoList(props) {
  const { todos, deleteTodo } = props;

  return (
    <div className={style.todoListContainer}>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}

export default TodoList;
