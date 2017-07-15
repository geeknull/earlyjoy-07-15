let defaultList = {
  list: [1, 3, 4],
  hasMore: false,
  loading: false,
  isEmpty: false,
  isInit: false
};

let myList = (state=defaultList, action) => {
  return state;
};

export default myList;
