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

// 备份我的个人信息
// 暂时不需要外面穿参数了
let backupMyInfo = (myInfoBackup) => {
  return {
    type: CONSTANTS.BACKUP_MY_INFO,
    myInfoBackup: myInfoBackup
  }
};

// 恢复我们的数据
let recoverMyinfo = (myInfoBackup) => {
  return {
    type: CONSTANTS.RECOVER_MY_INFO,
    myInfoBackup: myInfoBackup
  }
};

export { setMyInfo }
export { modifyMyUserName }
export { backupMyInfo }
export { recoverMyinfo }
