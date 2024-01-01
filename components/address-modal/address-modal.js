// components/address-modal/address-modal.js
import http from '../../service/api/index'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    show:true,
    list:[]
  },
  lifetimes:{
    attached() {
      this.initData()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async initData() {
      const id = wx.getStorageSync('user_id')
      const {code,data} = await http.fetchAddressList(id)
      if(code === 0) {
        this.setData({
          list:data
        })
      }
    },
    handleClick(e) {
      const info = e.currentTarget.dataset?.info
      this.triggerEvent('itemClick',info)
    },
    onClose() {
      this.triggerEvent('close')
    }
  }
})
