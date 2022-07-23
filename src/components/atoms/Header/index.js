import React from 'react'
import { ICArrowLeft } from '../../../assets';

const Header = ({ withArrowLeft, tittle, desc, onClick, withAvatar }) => {
  return (
    <div className='p-6 pt-9 flex flex-row items-center bg-white'>
      {withArrowLeft && (
        <div onClick={onClick} className='mr-6 hover:cursor-pointer'>
          <ICArrowLeft />
        </div>
      )}
      <div className='flex flex-1 justify-between'>
        <div>
          <h1 className='text-2xl font-medium'>{tittle}</h1>
          <p className='text-xs font-light text-gray-400'>{desc}</p>
        </div>
        {withAvatar && (
          <div>
            <img src={withAvatar} width={50} height={50}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
