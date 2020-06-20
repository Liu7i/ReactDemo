/**
 * 博客详情页面
 * @time 2020.6.20
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updataTitle } from '../../actions';

const Blog = (props)=>{
    const pageId = props.match.params.id;
    const {updataTitle} = props;

    useEffect(()=>{
        updataTitle(`博客详情页${pageId}`);
    },[updataTitle,pageId])

    return (
        <div>
            这是博客详情{pageId}
            <br/>
            <Link to={{pathname:'/',query:{test:'路由跳转传参3'}}}>回到首页</Link>
        </div>
    )
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    updataTitle: text => dispatch(updataTitle(text)),
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Blog);