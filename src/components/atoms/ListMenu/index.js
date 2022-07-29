import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ICArrowRight } from '../../../assets'

const ListMenu = ({tittle, destination}) => {
    const navigate = useNavigate();
  return (
    <div 
    onClick={() => navigate(destination)}
    className='mx-6 my-2 flex flex-row justify-between items-center cursor-pointer'>
        <p className='font-normal text-sm'>{tittle}</p>
        <ICArrowRight/>
    </div>
  )
}

export default ListMenu