import React, { useEffect } from 'react';

const Page404 = (props) => {
    const { history } = props;

    useEffect(() => {
        const GoBack = () => {
            setTimeout(() => {
                history.goBack();
            }, 2000)
        };
        GoBack();
    }, [history])

    return (
        <div>
            <h1>404</h1>
            <p>你想看的东西不见了~</p>
            <p>2s后返回上个页面</p>
        </div>
    )
}

export default Page404;