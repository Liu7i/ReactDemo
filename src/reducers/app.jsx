/* 页面信息 */
const app = (state = '首页', action) => {
  switch (action.type) {
      case 'UPDATA_TITLE':
          return action.text;
      default:
          return state;
  }
}

export default app;