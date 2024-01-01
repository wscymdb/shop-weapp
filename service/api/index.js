import  * as home  from './home'
import  * as login from './login'
import  * as shoppongCart from './shopping-cart'
import  * as order from './order'
import  * as address from './address'

export default {
  ...home,
  ...login,
  ...shoppongCart,
  ...order,
  ...address
}