import { http } from '../request/index'

export const createOrder = (data) => {
  return http.post({ 
    url:'/order/create', 
    data
   })
}

