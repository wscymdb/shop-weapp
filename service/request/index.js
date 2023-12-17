// 封装request请求

class YMRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  request(options) {
    return new Promise((resolve, reject) => {
      const token = wx.getStorageSync('token')
      const { url, ...args } = options
      wx.request({
        url: this.baseUrl + url,
        ...args,
        header: {
          'Authorization':token
        },
        success(res) {
          resolve(res.data)
        },
        fail: reject,
        complete(res) {
          const { code,msg } = res.data
          if (code !== 0) return wx.showToast({
            title: msg,
            icon: 'error'
          })
        }
      })
    })
  }

  get(options) {
    return this.request({
      method: 'get',
      ...options
    })
  }

  post(options) {
    return this.request({
      method: 'post',
      ...options
    })
  }
}

// export const http = new YMRequest('http://localhost:8888')
export const http = new YMRequest('http://192.168.1.103:8888')