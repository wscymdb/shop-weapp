// components/home-list/home-list.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCartClick() {
      this.triggerEvent('cartClick')
    },
    handleItemClick() {
      this.triggerEvent('itemClick')
    },
  }
})
