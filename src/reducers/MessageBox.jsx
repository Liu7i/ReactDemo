/* 消息弹出框容器 */
const MessageBox = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MSG':
            return [...state, {
                id: action.id,
                method: action.method,
                text: action.text,
            }];
        case 'ROMOVE_MSG':
            return state.filter(i=>i.id!==action.id);
        default:
            return state;
    }
}

export default MessageBox;