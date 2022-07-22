import React from 'react'
import { BottomNav } from '../../components'

const Order = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex-1'>Order</div>
      <BottomNav page='order'/>
    </div>
  )
}

export default Order