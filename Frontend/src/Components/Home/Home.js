import React from 'react'
import Slider from './Slider'
import Categories from './Categorys'
import ProviderExample from './ProviderExample'
import HowItWorks from './HowItWorks'
import StatasCounter from './StatasCounter'
import ChatBox from '../Help/ChatBox'

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <ProviderExample />
      <HowItWorks />
      <StatasCounter />
      <ChatBox />
    </>
  )
}

export default Home
