import React from 'react'
import { ICArrowLeft } from '../../../assets';

const AuthHeader = ({withArrowLeft, tittle, desc, onClick}) => {
  return (
    <div className='p-6 pt-9 flex flex-row items-center'>
        {withArrowLeft && (
        <div onClick={onClick} className='mr-6 hover:cursor-pointer'>
        <ICArrowLeft/>
        </div>
        )}
        <div>
        <h1 className='text-2xl font-medium'>{tittle}</h1>
        <p className='text-xs font-light text-gray-400'>{desc}</p>
        </div>
    </div>
  );
};

export default AuthHeader;
