import React, { useEffect } from 'react';

const Page404 = (props) => {
    const { history } = props;
    console.log(props);
    useEffect(() => {
        const GoBack = setTimeout(() => {
            history.goBack();
        }, 2000)
    }, [history])

    return (
        <div>
            <h1>404</h1>
            <p>找不到你要访问的页面~</p>
            <p>2s后返回上个页面</p>
        </div>
    )
}

export default Page404;