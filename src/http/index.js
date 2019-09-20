import Ajax from './ajax'

export default {
    getLike(user, key) {
        let query = Ajax.encode('text', {
            user: user,
            key: key
        })

        return Ajax.new({
            url: `https://like.toyou.ren/get?${query}`,
            method: 'get',
        })
    },
    addLike(user, key) {
        return Ajax.new({
            url: 'https://like.toyou.ren/add',
            method: 'post',
            body: {
                user: user,
                key: key
            }
        })
    }
}