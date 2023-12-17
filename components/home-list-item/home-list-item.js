// components/home-list-item/home-list-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info:{
      type:Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e) {
      this.triggerEvent('itemClick',this.properties.info)
    },
    handleCartClick(e) {
      this.triggerEvent('cartClick',this.properties.info)
    }
  }
})
