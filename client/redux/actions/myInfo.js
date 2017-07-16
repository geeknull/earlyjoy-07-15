import * as CONSTANTS from '../actionTypes.js';

// 设置我的个人信息
let setMyInfo = (myInfo) => {
  return {
    type: CONSTANTS.SET_MY_INFO,
    myInfo: myInfo
  };
};

// 设置我的名字
let modifyMyUserName = (userName) => {
  return {
    type: CONSTANTS.MODIFY_USER_NAME,
    userName: userName
  }
};

export { setMyInfo }
export { modifyMyUserName }
