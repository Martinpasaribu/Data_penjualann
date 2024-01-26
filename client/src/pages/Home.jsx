import React from 'react'
import online from '../assets/online.png'
export const Home = () => {
  return (
    <div className=' flex justify-center bg-gradient-to-br from-ungukeren to-pinkungu w-full h-screen'>
    <div className='flex  items-center w-full '>
      <div className='flex flex-col gap-8 pl-20'>
        <h1 className='text-white font-bold'>Welcome To Martech</h1>
        <h1 className='text-5xl font-bold text-white'>Aplikasi Data Penjualan</h1>
        <p className='text-white w-4/5'>Empower your coding journey with our comprehensive tutorials </p>
        <button className='p-2 w-2/6 bg-green-600 hover:to-blue hover:from-purple-200 transition duration-3000 ease-in-out px-4 py-2 rounded-md shadow-md text-white text-lg'> <a href="/das"> Get started </a></button>
      </div>

    </div>
        
    <div className='w-4/5  ' >
    <div className='mx-auto  my-auto w-3/5 mt-20 flex items-center'>
    <img src={online} alt="icon" className='w-full' />
    </div>
     
    </div>
  </div>
  )
}
