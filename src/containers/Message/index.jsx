import React from 'react';
import {Link} from 'react-router-dom';

const Message = (props)=>{
    const pageId = props.match.params.id;
    return (
        <div>
            文章详情{pageId}
            <Link to={{pathname:'/',query:{test:'路由跳转传参3'}}}>回到首页</Link>
        </div>
    )
}

export default Message;