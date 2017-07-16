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
        });
      case CONSTANTS.MODIFY_USER_NAME:
        // 修改用户的姓名信息
        return Object.assign({}, state, {
          userName: action.userName
        });
    }

    return state;
};

export default myInfo;
