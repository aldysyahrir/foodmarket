import React from 'react'
import {useNavigate} from 'react-router-dom'
import { ICHome, ICOrder, ICProfile } from '../../../assets'

const BottomNav = ({page}) => {
    const navigate = useNavigate()

    const onIconClick = (destination) => {
        if (page !== destination){
            navigate(`/${destination}`);
        }
    };

    const fill = (iAm) => {
        return iAm === page ? '#ff0' : '#fff'
    }

  return (
    <div className='max-h-16 h-16 flex flex-row justify-around items-center'>
        <div className='cursor-pointer' onClick={() => onIconClick('home')}>
        <ICHome fill={fill('home')} stroke={page !== 'home' ? '#E2E2E2' : '#fff'}/>
        </div>
        <div className='cursor-pointer' onClick={() => onIconClick('order')}>
        <ICOrder fill={fill('order')} stroke={page !== 'order' ? '#E2E2E2' : '#fff'}/>
        </div>
        <div className='cursor-pointer' onClick={() => onIconClick('profile')}>
        <ICProfile fill={fill('profile')} stroke={page !== 'profile' ? '#E2E2E2' : '#fff'}/>
        </div>
    </div>
  )
}

export default BottomNav