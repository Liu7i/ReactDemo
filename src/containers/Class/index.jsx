/**
 * 分类页面
 * @time 2020.6.20
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updataTitle } from '../../actions';

const Class = ({ updataTitle }) => {


  useEffect(() => {
    updataTitle('分类');
  }, [updataTitle])

  return (
    <div>
      这是分类页面
      <br />
      <span className="inter">
        <Link to={{ pathname: '/user', query: { test: '路由跳转传参' } }}>前往个人中心</Link>
        <Link to={{ pathname: '/blog/1' }}>前往博客1</Link>
        <Link to={{ pathname: '/blog/2' }}>前往博客2</Link>
      </span>
    </div>
  )
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
  updataTitle: text => dispatch(updataTitle(text)),
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(Class);