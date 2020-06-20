/* 搜索内容 */
const search = (state = '', action) => {
  switch (action.type) {
      case 'UPDATA_SEARCH':
          return action.text;
      default:
          return state;
  }
}

export default search;