import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { ICArrowLeft, ILAvatar } from '../../../assets';
import { user } from '../../../configs/constans';
import { userDataSelector } from '../../../redux';

const Header = ({ withArrowLeft, tittle, desc, onClick, withAvatar }) => {

  const userData = useSelector(userDataSelector, shallowEqual);

  const userImage = userData.avatar === "default" ? ILAvatar : `http://${userData.avatar}`;

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
            <img src={userImage} className="h-12 w-12 object-cover object-center rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
