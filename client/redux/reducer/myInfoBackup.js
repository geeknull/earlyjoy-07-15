import * as CONSTANTS from '../actionTypes.js';

let myInfoBackup = (state={}, action) => {
  switch (action.type) {
    case CONSTANTS.BACKUP_MY_INFO:
      return Object.assign({}, state, {
        ...action.myInfoBackup
      })
  }

  return state;
};

export default myInfoBackup;
