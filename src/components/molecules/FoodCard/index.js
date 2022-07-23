import React from 'react'
import { ICStar, ILFood1 } from '../../../assets'
import { Gap } from '../../atoms'

const FoodCard = ({image, tittle, star}) => {
  return (
    <div className='w-48 min-w-max h-52 bg-white rounded-lg mx-3 flex flex-col flex-1'>
        <img src={image} width={192} height={140}/>
        <div className='m-3'>
        <p className='text-base font-normal'>{tittle}</p>
        <Gap height={6}/>
        <div className='flex flex-row items-center'>
          {[1,2,3,4,5].map((item) => (
            <ICStar key={item} fill={item <= star ? "#ffc700" : "#cacaca"}/>
          ))}

            <p className='text-xs font-normal text-gray-400 ml-1'>{star}.0</p>
        </div>
        </div>
    </div>
  )
}

export default FoodCard