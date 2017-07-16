import * as CONSTANTS from '../actionTypes.js';

  let defaultMyinfo = {};
  let myInfo = (state=defaultMyinfo, action) => {
    switch (action.type) {
      case CONSTANTS.SET_MY_INFO:
        // state的引用并咩有变 就不会触发render
        // state.myInfo = action.myInfo;
        // 为了让state的引用变
        // let obj = {};
        // obj.avatar = state.avatar;
        return Object.assign({}, state, {
          ...action.myInfo
        });
      // 修改用户的姓名信息
      case CONSTANTS.MODIFY_USER_NAME:
        return Object.assign({}, state, {
          userName: action.userName
        });
      // 恢复我们的信息
      case CONSTANTS.RECOVER_MY_INFO:
        return Object.assign({}, state, {
          ...action.myInfoBackup
        })
    }

    return state;
};

export default myInfo;
