import { useState } from 'react';
import geneRaterandomNum from '../utils/generateRandomNum';

function RandomNumber({ maxNum }) {
  console.log('render starts');
  const [randomNum, setRandomNum] = useState(geneRaterandomNum(maxNum));

  // снова с маленькой буквы, тк это не компонент, а функция
  const changeRandomNum = () => {
    setRandomNum(geneRaterandomNum(maxNum));
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>generate random number</button>
    </div>
  );
}

export default RandomNumber;
