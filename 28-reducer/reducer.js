const initialState = [];

function reducer(state, action) {
  // if (action.type === 'ADD_NAME') {
  //   return [...state, action.payload]; // push не подойдет, так как нужно вернуть новое состояние, чтобы сохранить функцию чистой
  // }
  // if (action.type === 'DELETE_NAME') {
  //   return state.filter((name) => name !== action.payload); // filter не изменяет текущий массив, а создает новый на его основании
  // }
  // if (action.type === 'CLEAR_NAMES') {
  //   return [];
  // }
  // return state; // вернуть неизмененное состояние в остальных случаях

  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.payload];

    case 'DELETE_NAME':
      return state.filter((name) => name !== action.payload);

    case 'CLEAR_NAMES':
      return [];

    default:
      return state;
  }
}

let newState = reducer(initialState, { type: 'ADD_NAME', payload: 'Olga' });
console.log(newState);

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Aleksei' });
console.log(newState);

newState = reducer(newState, { type: 'DELETE_NAME', payload: 'Aleksei' });
console.log(newState);

newState = reducer(newState, { type: 'CLEAR_NAMES' });
console.log(newState);

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Aleksei' });
console.log(newState);

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Olga' });
console.log(newState);
