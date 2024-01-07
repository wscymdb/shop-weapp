// components/address-create/address-create.js
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
    name: '',
    phone: '',
    content: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.triggerEvent('onClose')
    },
    async handleCreate() {
      const {
        phone,
        content,
        name
      } = this.data
      const user_id = wx.getStorageSync('user_id')
      console.log(phone, content, name);

      if (!phone || !content || !name) return wx.showToast({
        icon: 'error',
        title: '请完善信息',
      })

      const {
        data,
        code
      } = await http.createAddress({
        name,
        phone,
        content,
        user_id
      })
      if (code === 0) {
        wx.showToast({
          icon:'success',
          title: '操作成功',
        })
        this.triggerEvent('onClose')
      }


    }

  }
})