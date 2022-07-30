import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ICStar, ILFood2 } from "../../assets"
import { Gap } from "../../components"

const FoodDetail = () => {
  const [counter, setCounter] = useState(1)
  const [Price, setPrice] = useState(2000000)

  const updateCounter = (type) => {
    if (type === "plus") setCounter(counter + 1)
    if (type === "minus" && counter > 0) setCounter(counter - 1)
  };

  return (
    <div className='relative'>
      <img src={ILFood2} style={{ width: 480 }} />
      <div className='absolute top-80 bottom-0 w-full -mt-5 rounded-t-2xl bg-white z-10 flex flex-col flex-1'>
        <div className='flex flex-row items-center justify-between'>
          <div className='m-3'>
            <p className='text-base font-normal'>Sanggara</p>
            <Gap heiht={6} />
            <div className='flex flex-row items-center'>
              {[1, 2, 3, 4, 5].map((item) => (
                <ICStar key={item} fill={item <= 3 ? "#ffc700" : "#cacaca"} />
              ))}
              <p className='text-xs font-normal text-gray-400 ml-1'>{3}</p>
            </div>
          </div>

          <div className='flex flex-row gap-2 mr-4'>
            <div onClick={() => updateCounter('minus')}
              className='w-7 h-7 rounded-lg border flex justify-center items-center border-black cursor-pointer'>-</div>
            <p style={{ minWidth: 28, textAlign: "center" }}>{counter}</p>
            <div onClick={() => updateCounter('plus')}
              className='w-7 h-7 rounded-lg border flex justify-center items-center border-black cursor-pointer'>+</div>

          </div>
        </div>
        <div className='ml-4 flex flex-1 flex-col'>
          <p className='mb-2 mt-3 mr-5 text-sm font-normal text-gray-500'>
            Makanan khas Bugis yang terbuat dari pisang dan cukup sering
            dipesan oleh anak muda dengan pola makan
            yang cukup tinggi dengan mengutamakan
            diet yang sehat dan teratur.
          </p>
          <p className='my-2 text-sm font-normal'>Ingredients</p>
          <p className='text-sm font-normal text-gray-500'>Pisang, Terigu, Telur, Garam, Minyak </p>
        </div>

        <div className='mx-4 mb-7 flex flex-row justify-between items-center'>
          <div>
            <p className='text-sm font-normal text-gray-500'>Total Price</p>
            <p className='text-lg font-normal'>IDR {Price * counter}</p>
          </div>
          <Link to="/payment-address" className='py-3 px-11 bg-yellow-500 rounded-lg'>Order Now</Link>
        </div>

      </div>
    </div>
  )
}

export default FoodDetail