const App = ({ initialButtonName, initialClassName }) => {
  // деструктуризация пропсов происходит сразу при передаче в ф.компонент
  // const { initialButtonName } = props; // деструктуризация объекта пропс
  const [buttonText, setButtonText] = React.useState(initialButtonName);
  // React.useState('click me');
  // click me - первоначальное состояние, useState - это метод, который возвращает массив из двух элементов, который с помощью деструктуризации можно разбить на 2 элемента
  // buttonText - переменная, которая содержит строку, ее начальное значение - клик ми
  // setButtonText - это функция, с помощью которой можно указывать новое значение для переменной, когда захотим изменить ее

  const onButtonClick = () => {
    setButtonText('hello from React');
    setClassText('green-btn');
  };

  const [classText, setClassText] = React.useState(initialClassName);

  return (
    <div className="app">
      <button onClick={onButtonClick} className={classText}>
        {buttonText}
      </button>
    </div>
  );
}; // пользовательский компонент

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container); // метод объекта ReactDOM - монтируем компонент реакт в html-страницу
root.render(<App initialButtonName="click me!" initialClassName="" />); // смотировали/подключили компонент в реальный ДОМ = рендер внутри корневого элемента

// initialButtonName и initialClassName - это свойства, значения для этих свойств передаются при рендеринге компонента
// также у компонента кроме свойств есть свое состояние, которое состоит из 2х переменных buttonText и classText, которое можно менять
