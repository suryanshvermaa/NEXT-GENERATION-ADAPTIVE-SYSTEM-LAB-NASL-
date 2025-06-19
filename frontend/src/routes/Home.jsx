import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeComponent from '../components/Home'
import {useGoogleLogin} from "@react-oauth/google"
import axios from "axios";

const Home = () => {
  const signup=useGoogleLogin({
    flow:"auth-code",
    onSuccess:res=> axios.post("http://localhost:3000/api/user/signupWithGoogle",{code:res.code})
    .then((res)=>console.log(res.data)),
    onError: err=>console.log(err.error)
  })
  const handleGoogleSignup=()=>{
    signup();
  }
  return (
    <div>
      <Navbar/>
      <HomeComponent/>
      <Footer/>
      <button className='p-4 bg-gray-800 text-white' onClick={handleGoogleSignup}>
        SignUPWithGoogle
      </button>
    </div>
  )
}

export default Home