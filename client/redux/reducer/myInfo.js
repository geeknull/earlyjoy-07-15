import * as CONSTANTS from '../actionTypes.js';

  let defaultMyinfo = {};
  let myInfo = (state=defaultMyinfo, action) => {
    switch (action.type) {
      case CONSTANTS.SET_MY_INFO:
        // state的引用并咩有变 就不会触发render
        state.myInfo = myInfo;
        // 为了让state的引用变
        // let obj = {};
        // obj.avatar = state.avatar;
        return Object.assign({}, state, {
          ...action.myInfo
        })
    }

    return state;
  /*return {
    x: 123
  };*/
};

export default myInfo;
