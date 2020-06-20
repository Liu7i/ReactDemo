/**
 * 分类页面
 * @time 2020.6.20
 */

import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updataTitle, updataSearch } from '../../actions';

const Search = ({ updataTitle,updataSearch, search }) => {
  const searchIpt = useRef();/* 搜索框ref */

  useEffect(() => {/* 修改标题 */
    updataTitle('搜索结果');
  }, [updataTitle])

  return (
    <div>
      这是搜索结果页面
      <br />
      <input type="text" ref={searchIpt} />
      <button type="button"
        onClick={async () => {
          const searchTxt = searchIpt.current.value.trim();
          if (searchTxt) {
            updataSearch(searchTxt);
          }
        }}
      >搜索</button>
      <br />
      搜索内容:{search}
      <br />
      <span className="inter">
        <Link to={{ pathname: '/user', query: { test: '路由跳转传参' } }}>前往个人中心</Link>
        <Link to={{ pathname: '/blog/1' }}>前往博客1</Link>
        <Link to={{ pathname: '/blog/2' }}>前往博客2</Link>
      </span>
    </div>
  )
}

const mapStateToProps = state => ({
  search: state.search,
})

const mapDispatchToProps = dispatch => ({
  updataTitle: text => dispatch(updataTitle(text)),
  updataSearch: text => dispatch(updataSearch(text)),
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(Search);