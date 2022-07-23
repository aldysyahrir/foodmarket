import React from 'react'

const TabNavitems = ({ active, tittle, onClick }) => {
    if (active) {
        return (
            <div onClick={onClick} className='relative'>
                <p className='text-sm font-medium text-black cursor-pointer'>{tittle}</p>
                <div className='absolute -bottom-2 w-10 border-b-2 border-black' />
            </div>
        )
    }
  return (
    <div onClick={onClick}>
        <p className='text-sm font-normal text-gray-500 cursor-pointer'>
            {tittle}
        </p>
    </div>
  )
}

export default TabNavitems