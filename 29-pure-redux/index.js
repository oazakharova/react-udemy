import { addCurrentTime, clearTimes } from './redux/actionCreators.js';
import store from './redux/store.js';

const addTimeBtn = document.getElementById('addTime');
addTimeBtn.addEventListener('click', () => {
  store.dispatch(addCurrentTime());
});

const clearTimesBtn = document.getElementById('clearTimes');

clearTimesBtn.addEventListener('click', () => {
  store.dispatch(clearTimes());
});

const timesList = document.getElementById('timesList');
store.subscribe(() => {
  timesList.innerHTML = '';

  const times = store.getState();
  times.forEach((time) => {
    let li = document.createElement('li');
    li.innerText = time;
    timesList.appendChild(li);
  });
});

// console.log(store.getState()); // ручное получение текущего состояния

// подписка на изменения состояния через subscribe(),
// который возвращает функцию для отмены подписки, для чего и нужна переменная unsubscribe
const unsubscribe = store.subscribe(() =>
  console.log(`redux store has just changed! ${store.getState()}`)
);

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:00:00',
// });

// unsubscribe();

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:30:00',
// });

// store.dispatch({
//   type: 'CLEAR_ALL_TIMES',
// });
