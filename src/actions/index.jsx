let id = 0;

export const updataUser = text => ({
    type: 'UPDATA_USER',
    text
})

/* 新增消息弹框 */
export const addMsg = obj => ({
    type: 'ADD_MSG',
    id: id += 1,
    method: obj.method,
    text: obj.text
})


/* 移除消息弹框 */
export const removeMsg = id => ({
    type: 'ROMOVE_MSG',
    id
})