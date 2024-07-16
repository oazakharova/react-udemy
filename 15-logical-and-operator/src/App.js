import { useState } from 'react';

import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {/*ЛОГИЧЕСКИЙ ОПЕРАТОР И - когда в зависимости от чего-то нужно показывать или скрывать часть кода */}
      {/* выполнится только когда каунт больше нуля - тру - из-за свойства короткого замыкания (когда первая часть не тру, вторая не проверяется/не выполняется) */}
      {/* все в {} - значит, это выражение JavaScript */}
      {count > 0 && (
        <div>
          <button onClick={resetCount} style={{ backgroundColor: 'orange' }}>
            reset
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
