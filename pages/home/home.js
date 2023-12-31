// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCartDetail:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  // 点击购物车icon
  handleCartClick(e) {
    
    this.setData({
      showCartDetail:true
    })
      
  },
  // 加购弹窗关闭
  handleClose() {
    this.setData({
      showCartDetail:false
    })
  },
  // 点击商品
  handleItemClick(e) {
    const payload = e.detail
    wx.redirectTo({
      url: `/pages/home-detail/home-detail?id=${payload.id}`,
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