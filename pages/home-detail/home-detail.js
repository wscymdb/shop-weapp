// pages/home-detail/home-detail.js
import Toast from '@vant/weapp/toast/toast';
import http from '../../service/api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    type: 0,
    id: 0,
    info: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {
      id
    } = options
    this.setData({
      id
    })
    this.initData()
  },
  async initData() {
    const {
      data,
      code
    } = await http.getProductById(this.data.id)
    if (code === 0) {
      let {detail_path,banner_path,...other} = data
      detail_path = detail_path.split(',')
      banner_path = banner_path.split(',')
      this.setData({
        info:{...other,detail_path,banner_path}
      })
    }
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