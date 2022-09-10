import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ICStar } from '../../../assets';

const Listitems = ({ data, page, loading }) => {
  const { picture, title, price, star, items, id } = data
  const navigate = useNavigate();
  const foodImage = `http://${picture}`

  if (loading) {
    return (
      <div className='flex flex-row my-3 mx-6 items-center'>
        <div className='h-16 w-16 rounded shimmer' />
        <div className='flex-1 ml-3 flex-row'>
          <div className='h-3 w-20 shimmer' />
          <div className='h-2 w-16 shimmer mt-1' />
        </div>
        <div className='flex flex-row'>
          <div className='h-3 w-20 shimmer mr-1' />
          <div className='h-3 w-3 shimmer' />
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={() => navigate(`/food-detail/${id}`)}
      className='flex flex-row my-3 mx-6 items-center cursor-pointer'>
      <img src={foodImage} className="object-cover object-center h-16 w-16 rounded" />
      <div className='flex-1 ml-3'>
        <p className='text-base font-normal text-black'>{title}</p>
        <p className='text-xs font-normal text-gray-400'>{page === 'order' && `${items} `}{price}</p>
      </div>
      <div className='flex flex-row'>
        {page === 'home' &&
          [1, 2, 3, 4, 5].map((item) => (
            <ICStar key={item} fill={item <= star ? "#ffc700" : "#cacaca"} />
          ))}

        {page === 'home' && <p className='text-xs font-normal text-gray-400 ml-1'>{star}.0</p>}
      </div>
    </div>
  )
}

export default Listitems