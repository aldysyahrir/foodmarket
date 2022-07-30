import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { ILLogo } from '../../assets';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = 3000
    setTimeout(() => {
    // setelah interval code di jalankan
    navigate('/sign-in')
    }, interval);
  }, [])
  
  return (
    <div className='flex flex-1 flex-col bg-yellow-500 justify-center items-center'>
      <ILLogo/>
      <h1 className='text-4xl font-medium mt-8'>FoodMarket</h1>
    </div>
  )
};

export default Splash;