// components/home-category.js
import http from '../../service/api/index'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes: {
    attached() {
      this.initData()
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async initData() {
      const {code,data} = await http.getLabelList()
      if(code ===0) {
        this.setData({
          list:data
        })
      }
      console.log(data);
    },
    handleItemClick(e) {
      const {id} = e.currentTarget.dataset
      wx.redirectTo({
        url: `/pages/category-page/category-page?id=${id}`,
      })
    }
  }
})
