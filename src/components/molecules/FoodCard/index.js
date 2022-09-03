import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ICStar, ILFood1 } from '../../../assets'
import { Gap } from '../../atoms'

const FoodCard = ({ data }) => {
  const { picture, title, star, id } = data
  const foodImage = `http://${picture}`
  const navigate = useNavigate();
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