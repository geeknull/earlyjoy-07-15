import * as CONSTANTS from '../actionTypes.js';

// 设置我的个人信息
let setMyInfo = (myInfo) => {
  return {
    type: CONSTANTS.SET_MY_INFO,
    myInfo: myInfo
  };
};

export { setMyInfo }
