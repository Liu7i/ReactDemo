/* 用户信息 */
const user = (state = { name: 'qbb' }, action) => {
    switch (action.type) {
        case 'UPDATA_USER':
            return { name: action.text };
        default:
            return state;
    }
}

export default user;