import { http } from '../request/index'

export const getProductList = (data) => {
  return http.post({ 
    url:'/product/list', 
    data
   })
}

// 根据id获取商品
export const getProductById = (id) => {
  return http.get({ 
    url:`/product/list/${id}`, 
   })
}

// 根据label获取对应商品列表
export const getProductByLabel = (id) => {
  return http.get({ 
    url:`/product/label/${id}`, 
   })
}

// 获取分类列表
export const getLabelList = () => {
  return http.get({
    url:'/label/'
  })
}