// pages/login/login.js
import http from '../../service/api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      name:'zs',
      password:'123456'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },


  async handleLogin() {
    const {data,code} = await http.login(this.data.info)
    if(code === 0) {
      wx.setStorageSync('token', data.token)
      wx.setStorageSync('user_id', data.id)
      wx.switchTab({
        url: '/pages/home/home',
        fail(e) {
          console.log(e,112);
        }
      },
      )
    }
  },
  handleIpt(e) {
    const {value} = e.detail
    const {type} = e.target.dataset
    const property = type === 'name' ? 'info.name': 'info.password'
    this.setData({
      [property]:value
    })
  }
})