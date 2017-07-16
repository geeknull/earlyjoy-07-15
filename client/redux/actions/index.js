// 会引入我们所有的action，引入我们所有的指令
import { setMyInfo, modifyMyUserName, backupMyInfo, recoverMyinfo } from './myInfo.js';
import { setMyList, setMyListLoading } from './myList.js';

export {
  setMyInfo, modifyMyUserName, backupMyInfo, recoverMyinfo,
  setMyList, setMyListLoading
};
