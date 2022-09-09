import React, { useEffect, useState } from 'react'
import ScrollContainer from "react-indiana-drag-scroll"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ILAvatar, ILFood1, ILFood2 } from '../../assets';
import { BottomNav, FoodCard, Header, Tabitems, Listitems } from '../../components';
import { foods, user } from '../../configs/constans';
import { bannerAction, bannerSelector, globalAllertAction, isLoginSelector, userDataAction } from '../../redux';
import Banner from './Banner';
import HomeLists from './HomeLists';

const Home = () => {
  const dispatch = useDispatch();

  const foodsData = useSelector(bannerSelector, shallowEqual);
  const [Activeitems, setActiveitems,] = useState(0);
  const [items] = useState([
    { key: 0, tittle: 'New Taste' },
    { key: 1, tittle: 'Popular' },
    { key: 2, tittle: 'Recommended' },
  ]);

  return (
    <div className='w-full flex flex-col max-h-screen'>
      <div className='flex flex-col flex-1 bg-gray-100'>
        <Header tittle="FoodMarket" desc="Let's get some food" withAvatar />
        <Banner />

        <Tabitems
          Activeitems={Activeitems}
          setActiveitems={setActiveitems}
          items={items}>

          <HomeLists activeItems = {Activeitems} />

        </Tabitems>
      </div>
      <BottomNav page='home' />
    </div>
  )
}

export default Home