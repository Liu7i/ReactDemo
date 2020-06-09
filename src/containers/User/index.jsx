import React from 'react';
import {Link} from 'react-router-dom';

const User = ()=>{
    return (
        <div>
            个人中心
            <Link to={{pathname:'/',query:{test:'路由跳转传参2'}}}>回到首页</Link>
        </div>
    )
}

export default User;