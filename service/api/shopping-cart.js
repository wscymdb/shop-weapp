import { http } from '../request/index'

export const createShoppingCart = (data) => {
  return http.post({ 
    url:'/cart/create', 
    data
   })
}

export const fetchListByUId = (id) => {
  return http.get({ 
    url:`/cart/${id}`, 
   })
}

export const deleteById = (id) => {
  return http.delete({ 
    url:`/cart/${id}`, 
   })
}

