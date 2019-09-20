class Ajax {
    new(opt = {}) {
        this.url = opt.url || ''
        this.method = opt.method || 'get'
        this.body = opt.body || {}
        this.type = opt.type || 'www'
        this.types = {
            json: 'application/json',
            www: 'application/x-www-form-urlencoded',
            formdata: 'application/x-www-form-urlencoded'
        }
        this.header = {
            'content-type': this.types[this.type],
        }
        this.request = new XMLHttpRequest()

        return this.handler()
    }

    handler() {
        return new Promise((resolve, reject) => {
            this.request.open(this.method, this.url, true)

            Object.keys(this.header).map(name => {
                this.request.setRequestHeader(name, this.header[name])
            })

            this.request.onload = () => {
                if (this.request.readyState === 4) {
                    if (this.request.status >= 200 && this.request.status < 300) {
                        resolve(this.request.response)
                    }
                } else {
                    reject({
                        status: this.request.status,
                        statusText: this.request.statusText
                    })
                }
            }
            this.request.onerror = () => {
                reject({
                    status: this.request.status,
                    statusText: this.request.statusText
                });
            };

            this.request.send(this.encode(this.type, this.body))
        })
    }

    encode(type, params) {
        var data
        switch (type) {
            case 'formdata':
                data = new FormData()
                Object.keys(params).map(key => {
                    data.append(key, params[key])
                })
                break
            case 'www':
            case 'text':
                data = this.paramsToString(params)
                break
            case 'json':
                data = JSON.stringify(params)
                break
        }

        return data
    }

    paramsToString(params) {
        return Object.keys(params).map(key => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        }).join('&')
    }
}

export default new Ajax