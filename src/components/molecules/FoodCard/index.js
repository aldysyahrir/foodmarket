import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ICStar, ILFood1 } from '../../../assets'
import { Gap } from '../../atoms'

const FoodCard = ({ data, loading }) => {
  const { picture, title, star, id } = data
  const foodImage = `http://${picture}`
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className='w-48 min-w-max h-52 bg-white rounded-lg mx-3 flex flex-col flex-1 overflow-hidden'>
        <div className='h-36 w-48 shimmer' />
        <div className='m-3'>
          <div className='w-36 h-3 shimmer' />
          <Gap height={6} />
          <div className='flex flex-row items-center'>
            <div className='w-24 h-3 shimmer' />
            <Gap width={4} />
            <div className='w-3 h-3 shimmer' />

          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={() => navigate(`/food-detail/${id}`)}
      className='w-48 min-w-max h-52 bg-white rounded-lg mx-3 flex flex-col flex-1 cursor-pointer overflow-hidden'>
      <img src={foodImage} className="object-cover object-center h-36 w-48" />
      <div className='m-3'>
        <p className='text-base font-normal'>{title}</p>
        <Gap height={6} />
        <div className='flex flex-row items-center'>
          {[1, 2, 3, 4, 5].map((item) => (
            <ICStar key={item} fill={item <= star ? "#ffc700" : "#cacaca"} />
          ))}

          <p className='text-xs font-normal text-gray-400 ml-1'>{star}.0</p>
        </div>
      </div>
    </div>
  )
}

export default FoodCard