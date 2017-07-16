import {combineReducers} from 'redux';
import myInfo from './myInfo';
import myList from './myList';
import myInfoBackup from './myInfoBackup';

export default combineReducers({
  myInfo, myInfoBackup,
  myList,
});
