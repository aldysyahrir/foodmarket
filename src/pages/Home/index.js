import React, { useEffect, useState } from 'react'
import ScrollContainer from "react-indiana-drag-scroll"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ILAvatar, ILFood1, ILFood2 } from '../../assets';
import { BottomNav, FoodCard, Header, Tabitems, Listitems } from '../../components';
import { foods, user } from '../../configs/constans';
import { allFoodsAction, allFoodsSelector, globalAllertAction, isLoginSelector, userDataAction } from '../../redux';

const Home = () => {
  const dispatch = useDispatch();

  const foodsData = useSelector(allFoodsSelector, shallowEqual);
  const isLogin = useSelector(isLoginSelector, shallowEqual);
  const [Activeitems, setActiveitems,] = useState(0);
  const [items] = useState([
    { key: 0, tittle: 'New Taste' },
    { key: 1, tittle: 'Popular' },
    { key: 2, tittle: 'Recommended' },
  ]);

  const getUser = () => {
    if (isLogin) {
      user
        .getUser()
        .then((res) => {
          dispatch(userDataAction(res.data));
        })
        // .catch((err) => {
        //   const { message } = err.response.data;
        //   dispatch(globalAllertAction({ show: true, message }));
        // });
    }
  }

  const getFood = () => {
    foods.getAllFood().then((res) => {
      dispatch(allFoodsAction(res.data))
    })
      .catch((err) => {
        const { message } = err.response.data;
        dispatch(globalAllertAction({ show: true, message }));
      })
  }

  useEffect(() => {
    getUser();
    getFood();
  }, [])

  return (
    <div className='w-full flex flex-col max-h-screen'>
      <div className='flex flex-col flex-1 bg-gray-100'>
        <Header tittle="FoodMarket" desc="Let's get some food" withAvatar />

        <ScrollContainer horizontal className='h-64 overflow-hidden flex flex-row items-center'>

          {foodsData.data?.map(item => (
            <FoodCard key={item.id} data={item} />
          ))}

        </ScrollContainer>
        <Tabitems
          Activeitems={Activeitems}
          setActiveitems={setActiveitems}
          items={items}>
          <ScrollContainer vertical className='list-container home'>
            {foodsData.data?.map(item => (
              <Listitems key={item.id} data={item} page='home' />
            ))}
          </ScrollContainer>

        </Tabitems>
      </div>
      <BottomNav page='home' />
    </div>
  )
}

export default Home