import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updataUser } from '../../actions';
import styles from './index.less';

const Home = (props) => {
    const myIpt = useRef();
    const { user, updataUser } = props;

    return (
        <div>
            首页
            <Link to={{ pathname: '/user', query: { test: '路由跳转传参' } }}>前往个人中心</Link>
            <Link to={{ pathname: '/message/1' }}>前往文章1</Link>
            <Link to={{ pathname: '/message/2' }}>前往文章2</Link>
            <br />
            当前用户：{user.name}
            <input ref={myIpt} type="text" />
            <button onClick={() => {
                updataUser(myIpt.current.value);
                myIpt.current.value = '';
            }}>改名</button>
            <span className={styles.qbb}>25145454</span>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    updataUser: text => dispatch(updataUser(text))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);