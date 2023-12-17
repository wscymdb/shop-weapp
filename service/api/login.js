import { http } from '../request/index'

export const login = data => {
  return http.post({ 
    url:'/login', 
    data
   })
}