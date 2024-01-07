import { http } from '../request/index'

export const createOrder = (data) => {
  return http.post({ 
    url:'/order/create', 
    data
   })
}

export const checkOrderByType= (data) => {
  return http.post({ 
    url:'/order/checkType', 
    data
   })
}

