// components/shopping-cart-detail/shopping-cart-detail.js
import http from '../../service/api/index'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productId:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: true,
    activeIndex:0,
    count:1,
    info:{}
  },

  /**
   * 生命周期
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
    // initData() {
    //   console.log(this.properties.productId);
    // },
    async initData() {
      const id = this.properties.productId
      if(!id) return
      const {
        data,
        code
      } = await http.getProductById(id)
      if (code === 0) {
        const info = {...data}
        info.img = info.banner_path.split(',')[0]
        this.setData({
          info
        })
      }
    },
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
    async handleConfirm() {
     
      this.triggerEvent('popupConfirm',{productId:this.data.productId})
    }

  }
})