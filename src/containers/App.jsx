import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import User from './User';
import Message from './Message';
import Page404 from './Page404';
import MessageBox from './MessageBox'; /* 消息弹出框组件 */

const App = () => {
  return (
    <Router>
      <Switch>
        {/* 根目录 */}
        <Route exact path={'/'} component={Home}></Route>
        {/* 静态路由页面 */}
        <Route exact path={'/user'} component={User}></Route>
        {/* 动态路由页面 */}
        <Route exact path={'/message/:id'} component={Message}></Route>
        {/* 404页面 */}
        <Route component={Page404}></Route>
      </Switch>
      <MessageBox/>
    </Router>
  );
}

export default App;
