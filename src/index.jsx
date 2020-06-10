import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootStore from './reducers';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './normalize.css';

/* 尝试获取会话存储 */
const sessionState = () => {
  if (sessionStorage.getItem('state')) {
    return JSON.parse(sessionStorage.getItem('state'))
  }
  return undefined;
}

/* 创建store */
const store = createStore(rootStore, sessionState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/* 页面刷新或关闭前更新会话存储 */
window.onbeforeunload = () => {
  const state = store.getState();
  sessionStorage.setItem('state', JSON.stringify(state));
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
