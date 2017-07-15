// 这是action
import * as CONSTANTS from '../actionTypes.js';

// 设置我的列表
let setMyList = (response) => {
  // response 是服务端的返回
  // let { list, hasMore } = response;
  return {
    type: CONSTANTS.SET_MY_LIST,
    list: response.list,
    hasMore: response.hasMore
  }
};

// 设置我的列表的loading状态
let setMyListLoading = (loading) => {
  // 我们期望loading是一个布尔值
  // 即是否设置当前状态正在loading

  return {
    type: CONSTANTS.SET_MY_LIST_LOADING,
    loading: loading
  }
};

export { setMyList }
export { setMyListLoading }
