import React from 'react'
import ScrollContainer from "react-indiana-drag-scroll"
import { ILAvatar, ILFood1, ILFood2 } from '../../assets';
import { BottomNav, FoodCard, Header } from '../../components';

const Home = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex-1'>
        <Header tittle="FoodMarket" desc="Let's get some food" withAvatar={ILAvatar} />

        <ScrollContainer horizontal className='bg-gray-100 h-64 overflow-hidden flex flex-row items-center'>

          <FoodCard image={ILFood1} tittle="Sanggara" star={3} />
          <FoodCard image={ILFood2} tittle="Pisang Ijo" star={5} />
          <FoodCard image={ILFood1} tittle="Barongko" star={4} />
          <FoodCard image={ILFood2} tittle="Bandang-bandang" star={2} />
        </ScrollContainer>
      </div>
      <BottomNav page='home' />
    </div>
  )
}

export default Home