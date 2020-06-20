import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updataTitle, updataSearch } from '../../actions';

const Home = ({ updataTitle, history, updataSearch }) => {

    const searchIpt = useRef();/* 搜索框ref */

    useEffect(() => {/* 修改标题 */
        updataTitle('首页');
    }, [updataTitle])

    return (
        <div>
            这是首页
            <br />
            <span className="inter">
                <Link to={{ pathname: '/user', query: { test: '路由跳转传参' } }}>前往个人中心</Link>
                <Link to={{ pathname: '/blog/1' }}>前往博客1</Link>
                <Link to={{ pathname: '/blog/2' }}>前往博客2</Link>
            </span>
            <br />
            <input type="text" ref={searchIpt} />
            <button type="button"
                onClick={() => {
                    const searchTxt = searchIpt.current.value.trim();
                    if (searchTxt) {
                        updataSearch(searchTxt);
                        history.push({ pathname: '/search' })
                    }
                }}
            >搜索</button>
        </div>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    updataTitle: text => dispatch(updataTitle(text)),
    updataSearch: text => dispatch(updataSearch(text)),
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);