// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      nick_name: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getUserInfo()
  },
  getUserInfo() {
    const info = wx.getStorageSync('user_info')
    this.setData({
      info
    })
  },
  logout() {
    wx.setStorageSync('token', '')
    wx.redirectTo({
      url: '/pages/login/login',
    })
  },
  handleTagClick(e) {
    let status = e.currentTarget.dataset.status
    wx.redirectTo({
      url: `/pages/my-detail/my-detail?status=${status}`,
    })
  },
  handleAddress() {
    wx.redirectTo({
      url: '/pages/address/address',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})