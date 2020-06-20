/**
 * 404页面
 * @time 2020.6.20
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updataTitle } from '../actions';

const Page404 = ({history,updataTitle}) => {

    useEffect(()=>{
        updataTitle('404');
    },[updataTitle])

    useEffect(() => {
        let timer;
        const GoBack = () => {
            timer = setTimeout(() => {
                history.goBack();
            }, 2000)
        };
        GoBack();
        return ()=>{
            clearTimeout(timer)
        }
    }, [history])

    return (
        <div>
            <h1>404</h1>
            <p>你想看的东西不见了~</p>
            <p>2s后返回上个页面</p>
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
)(Page404);