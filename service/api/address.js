import { http } from '../request/index'


export const fetchAddressList = (id) => {
  return http.get({ 
    url:`/address/${id}`, 
   })
}



