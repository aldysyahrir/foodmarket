import React, { useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { ILAvatar } from '../../assets'
import { BottomNav, Gap, ListMenu, Tabitems } from '../../components'
import { userDataSelector } from '../../redux'

const Profile = () => {
  const user = useSelector(userDataSelector, shallowEqual)
  const [activeItems, setActiveItems] = useState(0)
  const [items, setitems] = useState([
    { key: 0, tittle: "Account" },
    { key: 1, tittle: "FoodMarket" },
  ])

  const userAvatar = user?.avatar !== "default" ? `http://${user?.avatar}` : ILAvatar;
  return (
    <div className='w-full flex flex-col'>
      <div className='flex-1 bg-gray-100'>
        <div className='h-60 bg-white'>
          <div className='w-full flex justify-center items-center flex-col'>
            <div className='w-28 h-28 border border-dashed rounded-full flex justify-center items-center mt-6'>
              <img src={userAvatar}
                className="w-24 h-24 rounded-full object-cover object-center" />
            </div>
            <p className='text-lg font-medium'>{user?.name}</p>
            <p className='text-sm font-light text-gray-500'>{user?.email}</p>
          </div>
        </div>
        <Gap height={24} />
        <Tabitems
          items={items}
          Activeitems={activeItems}
          setActiveitems={setActiveItems}>
          <Gap height={12} />
          {activeItems === 0 ? (
            <>
              <ListMenu tittle="Edit Profile" destination="/edit-profile" />
              <ListMenu tittle="Home Address" destination="/update-address" />
              <ListMenu tittle="Security" destination="/update-password" />
              <ListMenu tittle="Payments" />
              <ListMenu tittle="Log Out" destination="/sign-in" />
            </>
          ) : (
            <>
              <ListMenu tittle="Rate App" />
              <ListMenu tittle="Help Center" />
              <ListMenu tittle="Privacy & Policy" />
              <ListMenu tittle="Terms & Condition" />
            </>
          )}

        </Tabitems>
      </div>
      <BottomNav page='profile' />
    </div>
  )
}

export default Profile