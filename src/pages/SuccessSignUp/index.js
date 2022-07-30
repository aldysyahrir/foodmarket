import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ILFood1 } from '../../assets'
import { Button, Gap } from '../../components'

const SuccessSignUp = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col flex-1 justify-center items-center bg-gray-100'>
      <div className='max-w-xs px-4'>
        <img src={ILFood1} />
        <Gap height={90} />
        <p className='text-xl font-normal text-center'>Yeay! Completed</p>
        <Gap height={6} />
        <p className='text-sm font-light text-gray-400 text-center'>
          Now you are able to order
          some foods as a self-reward</p>
        <Gap height={30} />
        <Button
          onClick={() => navigate("/home")}
          label="Find Foodds" />
        <Gap height={30} />
      </div>
    </div>
  )
}

export default SuccessSignUp