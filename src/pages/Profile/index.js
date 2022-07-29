import React, { useState } from 'react'
import { ILAvatar } from '../../assets'
import { BottomNav, Gap, ListMenu, Tabitems } from '../../components'

const Profile = () => {
  const [activeItems, setActiveItems] = useState(0)
  const [items, setitems] = useState([
    { key: 0, tittle: "Account" },
    { key: 1, tittle: "FoodMarket" },
  ])
  return (
    <div className='w-full flex flex-col'>
      <div className='flex-1 bg-gray-100'>
        <div className='h-60 bg-white'>
          <div className='w-full flex justify-center items-center flex-col'>
            <div className='w-28 h-28 border border-dashed rounded-full flex justify-center items-center mt-6'>
              <img src={ILAvatar}
                className="w-24 h-24 rounded-full" />
            </div>
            <p className='text-lg font-medium'>Aldy Syahrir</p>
            <p className='text-sm font-light text-gray-500'>aldhyrombe@gmail.com</p>
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
              <ListMenu tittle="Edit Profile" />
              <ListMenu tittle="Home Address" />
              <ListMenu tittle="Security" />
              <ListMenu tittle="Payments" />
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