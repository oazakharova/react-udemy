// count в фигурных скобках в параметре - это деструктуризация объекта пропс
function Counter({ count }) {
  return <h1>total clicks: {count}</h1>; // count в фигурных скобках - синтаксис JSX, так как внутри - JS код
}

export default Counter;
