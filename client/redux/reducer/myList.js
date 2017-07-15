// 这是reducer
import * as CONSTANTS from '../actionTypes.js';

let defaultList = {
  list: [],
  offset: 0,
  limit: 10,
  hasMore: false,
  loading: false,
  isEmpty: false,
  isInit: false
};

let myList = (state=defaultList, action) => {
  switch (action.type) {
    // 服务端获取完数据之后 派发action
    // action在将数据给了reducer
    case CONSTANTS.SET_MY_LIST:
      // 生成一个新List对象
      let newList = [...state.list, ...action.list];

      return Object.assign({}, state, {
        list: newList,
        hasMore: action.hasMore,
        loading: false,
        isEmpty: newList.length === 0,
        isInit: true
      });
    //  设置list的loading态
    case CONSTANTS.SET_MY_LIST_LOADING:
      // 生成一个新List对象
      return Object.assign({}, state, {
        loading: action.loading
      });
  }
  return state;
};

export default myList;
