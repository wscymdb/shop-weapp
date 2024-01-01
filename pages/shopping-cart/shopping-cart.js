// pages/shopping-cart/shopping-cart.js
import http from '../../service/api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initData()
  },

  async initData() {
    const userId = wx.getStorageSync('user_id')
    const {code,data} = await http.fetchListByUId(userId)
    if(code === 0) {
      console.log(data);
      this.setData({
        list:data
      })
    }
  },

  // remove
  async handleDelete(e) {
    console.log(e);
    const id = e.currentTarget.dataset?.id
    const {code} = await http.deleteById(id)
    if(code === 0 ) {
      wx.showToast({
        title: '操作成功～',
      })
      this.initData()
    }
  },
 async handleClick (e) {
  const id = e.currentTarget.dataset?.id
  console.log(id);
  wx.redirectTo({
    url: `/pages/pay/pay?id=${id}`,

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