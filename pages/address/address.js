// pages/address/address.js
import http from '../../service/api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    showCreate:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initData()
  },

  async initData() {
    const id = wx.getStorageSync('user_id')
    const {
      code,
      data
    } = await http.fetchAddressList(id)
    if (code === 0) {
      this.setData({
        list: data
      })
    }
  },
  async handleDelete(e) {
    console.log(e);
    const id = e.currentTarget.dataset.id
    const {code} = await http.deleteAddress(id)
    if(code === 0) {
      wx.showToast({
        icon:'success',
        title: '操作成功',
      })
      this.initData()
    }
  },
  handleClose() {
    this.setData({
      showCreate:false
    })
    this.initData()
  },
  handleCreate() {
    this.setData({
      showCreate:true
    })
  }
})