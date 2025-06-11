import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeComponent from '../components/Home'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeComponent/>
      <Footer/>
    </div>
  )
}

export default Home