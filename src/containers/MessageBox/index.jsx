/* 消息提示框容器 */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './index.less';

const MessageBox = ({ msgBox }) => {
    const [msgArr, setMsgArr] = useState();

    useEffect(() => {
        const myArr = [];
        const msgBoxLen = msgBox.length;
        if (msgBoxLen !== 0) {
            for (let i = 0; i < msgBoxLen; i += 1) {
                let theType = ``;
                switch (msgBox[i].method) {
                    case 'success': theType = `iconfont icon-check-circle-fill ${styles.success}`; break;
                    case 'error': theType = `iconfont icon-close-circle-fill ${styles.error}`; break;
                    case 'warn': theType = `iconfont icon-info-circle-fill ${styles.warn}`; break;
                    default: theType = `iconfont icon-info-circle-fill`;
                }

                myArr.push(
                    <li key={msgBox[i].id}>
                        <div>
                            <span className={theType}></span>{msgBox[i].text}
                        </div>
                    </li>
                )
            }
        }
        setMsgArr(myArr)
    }, [msgBox])

    return (
        <ul className={styles.msgBox}>
            <li>
                <div>
                    <span className={`iconfont icon-check-circle-fill ${styles.success}`}></span>密码修改成功！
                </div>
            </li>
            <li>
                <div>
                    <span className={`iconfont icon-close-circle-fill ${styles.error}`}></span>密码格式错误！请输入8-16位数字字母下划线，密码中至少需要一位大写字母、一位数字、一位小写字母
                </div>
            </li>
            <li>
                <div>
                    <span className={`iconfont icon-info-circle-fill ${styles.warn}`}></span>你使用的浏览器版本过于古老，建议下载chrome浏览器获取最佳体验
                </div>
            </li>
            <li>
                <div>
                    <span className='iconfont icon-info-circle-fill'></span>欢迎您: 王二麻子~
                </div>
            </li>
            {msgArr}
        </ul>
    )
}

const MSTP = state => ({
    msgBox: state.MessageBox
})

const MDTP = dispatch => ({
    // addMsg: () => dispatch(addMsg({method:'success',text:'新增成功！'}))
})

export default connect(
    MSTP, MDTP
)(MessageBox);
