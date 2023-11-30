// components/shopping-cart-detail/shopping-cart-detail.js
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
    show: true,
    activeIndex:0,
    count:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleKindClick(e) {
      const {currentTarget:{dataset}} = e
      console.log(dataset);
      this.setData({
        activeIndex:dataset.index
      })
    },
    handleCountToggle(e) {
      const {currentTarget:{dataset}} = e
      console.log(dataset.type);
      if(this.data.count <= 1 &&dataset.type===-1 ) return
      this.setData({
        count:this.data.count + dataset.type
      })
    },
    handleClose() {
      this.triggerEvent('popupClose')
    },
    handleConfirm() {
      this.triggerEvent('popupConfirm')
    }

  }
})