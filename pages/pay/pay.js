// pages/pay/pay.js
import http from '../../service/api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '0',
    info: {},
    showAddress:false,
    addressInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id
    })
    this.initData()
  },

  async initData() {
    const {
      code,
      data
    } = await http.getProductById(this.data.id)
    if(code === 0) {
      data.img = data.banner_path.split(',')[0]
      this.setData({
        info:data
      })
    }
   },

  async onSubmit(e) {
    if(!this.data.addressInfo) return wx.showToast({
      icon:"none",
      title: '请选择收货地址',
    })
    const user_id = wx.getStorageSync('user_id')
    const address_id = this.data.addressInfo.id
   
    const {code} = await http.createOrder({
      user_id,
      address_id,
      product_id:this.data.id
    })

    if(code === 0) {
      wx.showToast({
        icon: 'loading',
        title: '支付中～',
        success() {
          setTimeout(() => {
            wx.showToast({
              icon: 'success',
              title: '支付成功～',
              success() {
                setTimeout(() => {
                  wx.switchTab({
                    url: '/pages/home/home',
                  })
                },300)
               
              }
            })
          }, 500)
  
        }
      })
    }
    

  },
  addressClick() {
    this.setData({
      showAddress:true
    })
  },
  addressClose() {
    this.setData({
      showAddress:false
    })
  },

  handleItemClick(payload) {
    this.setData({
      addressInfo:payload.detail,
      showAddress:false
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