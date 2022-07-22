import React from 'react'
import { BottomNav } from '../../components'

const Profile = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex-1'>Profile</div>
      <BottomNav page='profile'/>
    </div>
  )
}

export default Profile