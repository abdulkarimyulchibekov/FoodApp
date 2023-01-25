import React from 'react'
import "./order.scss"
import { OrderHeader } from '../OrderHeader/OrderHeader'
import { OrderFooter } from '../OrderFooter/OrderFooter'
import { OrderList } from '../OrderList/OrderList'

export const Order = () => {
  return (
    <div className='order'>
      <OrderHeader />
      <OrderList />
      <OrderFooter />
    </div>
  )
}
