// pages/category-page/category-page.js
import http from '../../service/api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    label_id: 0,
    title:'',
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      label_id: options.id,
      title:options.name
    })
    this.initData()
  },

  async initData() {
    const {
      code,
      data
    } = await http.getProductByLabel(this.data.label_id)
    if (code === 0) {
      this.setData({
        list: data.map(item => {
          item.img = item.banner_path.split(',').pop()
          return item
        })
      })
    }

  },

  handleItemClick(e) {
    const payload = e.detail
    wx.redirectTo({
      url: `/pages/home-detail/home-detail?id=${payload.id}`,
    })
  }




})