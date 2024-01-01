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
    info: {},
    location: '杭州市',
    cartCount: 0
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
    this.fetchCartCount()
  },
  handleLocation() {
    const that = this
    console.log(12);
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.chooseLocation({
          success(res) {
            console.log(res);
            that.setData({
              location: res.name
            })
          }
        })
      },
      fail(e) {
        console.log(e);
      }
    })
  },
  async initData() {
    const {
      data,
      code
    } = await http.getProductById(this.data.id)
    if (code === 0) {
      let {
        detail_path,
        banner_path,
        ...other
      } = data
      detail_path = detail_path.split(',')
      banner_path = banner_path.split(',')
      this.setData({
        info: {
          ...other,
          detail_path,
          banner_path
        }
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
      type: dataset.type
    })
    if (dataset.type === 0) {
      this.setData({
        show: true,
      })
    } else {
      wx.redirectTo({
        url: `/pages/pay/pay?id=${this.data.id}`,
      })
    }

  },
  // 弹窗关闭
  handlePopupClose(e) {
    this.setData({
      show: false
    })
  },
  // 弹窗确定
  async handleConfirm(e) {
    // this.data.type 0-》从加入购物车进入  1-》立即购买进入
    if (this.data.type === 0) {
      const user_id = wx.getStorageSync('user_id')
      const params = {
        product_id: e.detail.productId,
        user_id
      }
      const {
        code
      } = await http.createShoppingCart(params)
      if (code === 0) {
        wx.showToast({
          title: '加购成功～',
        })
      }
      this.setData({
        show: false
      })
    } else {
      console.log(123123213);
     
    }
  },
  // 获取购物车数量
  async fetchCartCount() {
    const userId = wx.getStorageSync('user_id')
    const {
      code,
      data
    } = await http.fetchListByUId(userId)
    if (code === 0) {
      this.setData({
        cartCount: data.length
      })
    }
  },
  goCart(e) {
    wx.switchTab({
      url: '/pages/shopping-cart/shopping-cart',
    })
  }
})