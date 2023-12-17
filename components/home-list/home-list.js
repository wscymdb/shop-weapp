// components/home-list/home-list.js
import * as http from '../../service/api/home'
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
    list:[]
  },

  /**
   * 组件生命周期
   */
  lifetimes: {
    attached() {
      this.initData()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async initData() {
      const {data} = await http.getProductList()
      const transData = data.map(item => {
        item.img = item?.banner_path?.split(',')?.pop()
        return item
      })
      this.setData({
        list:transData
      })
    },
    handleCartClick(e) {
      this.triggerEvent('cartClick',e.detail)
    },
    handleItemClick(e) {
      this.triggerEvent('itemClick',e.detail)
    },
  }
})
