import { http } from '../request/index'


export const fetchAddressList = (id) => {
  return http.get({ 
    url:`/address/${id}`, 
   })
}
export const createAddress= (data) => {
  return http.post({ 
    url:`/address/create`, 
    data
   })
}

export const deleteAddress= (id) => {
  return http.delete({ 
    url:`/address/${id}`, 
   })
}



