import Ajax from './ajax'

export default {
    getLike(key) {
        let query = Ajax.encode('text', {
            key: key
        })

        return Ajax.new({
            url: `https://ywsupyylinnq.cn-e1.leanapp.cn/get?${query}`,
            method: 'get',
        })
    },
    addLike(key) {
        return Ajax.new({
            url: 'https://ywsupyylinnq.cn-e1.leanapp.cn/add',
            method: 'post',
            body: {
                key: key
            }
        })
    }
}