import * as actionTypes from './actionTypes.js';
import getCurrentTime from '../utils/getCurrentTime.js';

export function addCurrentTime() {
  // функция, возвращающая action - объект с типом ADD_CURRENT_TIME
  return {
    type: actionTypes.ADD_CURRENT_TIME,
    payload: getCurrentTime(),
  };
}

export function clearTimes() {
  return {
    type: actionTypes.CLEAR_ALL_TIMES,
  };
}
