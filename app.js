// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const token = wx.getStorageSync('token')
    if(!token) {
      console.log(123123);
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }
  

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
