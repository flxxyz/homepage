import Ajax from './ajax'

export default {
    getLike(key) {
        let query = Ajax.encode('text', {
            key: key
        })

        return Ajax.new({
            url: `https://like.toyou.ren/get?${query}`,
            method: 'get',
        })
    },
    addLike(key) {
        return Ajax.new({
            url: 'https://like.toyou.ren/add',
            method: 'post',
            body: {
                key: key
            }
        })
    }
}