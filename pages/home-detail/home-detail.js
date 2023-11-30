// pages/home-detail/home-detail.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    type: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  // 
  goHome() {
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  // 点击加购或者立即购买
  handleSubmit(e) {
    const {
      currentTarget: {
        dataset
      }
    } = e
    this.setData({
      show: true,
      type: dataset.type
    })
  },
  // 弹窗关闭
  handlePopupClose(e) {
    this.setData({
      show: false
    })
  },
  // 弹窗确定
  handleConfirm() {
    // this.data.type 0-》从加入购物车进入  1-》立即购买进入
    if (this.data.type === 0) {
      Toast('加购成功~');

      this.setData({
        show: false
      })
    } else {

    }
  }
})