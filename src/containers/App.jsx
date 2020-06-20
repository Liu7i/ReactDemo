import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from './Home';
import User from './User';
import Blog from './Blog';
import Class from './Class';
import TimeAxis from './TimeAxis';
import Search from './Search';
import Page404 from './Page404';

const App = ({title}) => {
  return (
    <Router>
      <div className="blogBox">
        <div className="body">
          <Switch>
            {/* 根目录 */}
            <Route exact path={'/'} component={Home}></Route>
            {/* 静态路由页面 */}
            <Route exact path={'/user'} component={User}></Route>
            <Route exact path={'/class'} component={Class}></Route>
            <Route exact path={'/time'} component={TimeAxis}></Route>
            <Route exact path={'/search'} component={Search}></Route>
            {/* 动态路由页面 */}
            <Route exact path={'/blog/:id'} component={Blog}></Route>
            {/* 404页面 */}
            <Route component={Page404}></Route>
          </Switch>
        </div>
        <div className="title">
          {title}
        </div>
        <div className="menuBox">
          <Link className="menu" to={{ pathname: '/' }}>首页</Link>
          <Link className="menu" to={{ pathname: '/class' }}>分类</Link>
          <Link className="menu" to={{ pathname: '/time' }}>时间轴</Link>
        </div>
        <div className="footer-tips">
          <a href="http://www.beian.miit.gov.cn/">蜀ICP备20010725号</a>
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  title: state.app
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);