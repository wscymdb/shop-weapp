// pages/my-detail/my-detail.js
import http from './../../service/api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    status:0,
    titleMap: {
      0:'待发货',
      1:'待收货',
      2:'全部订单'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
this.setData({
  status:options.status || 0
})
    this.initData()
  },

  async initData() {
    const id = wx.getStorageSync('user_id')
    const {
      data,
      code
    } = await http.checkOrderByType({
      id,
      status:this.data.status
    })
    if (code === 0) {
      this.setData({
        list: data
      })
    }
  }
})