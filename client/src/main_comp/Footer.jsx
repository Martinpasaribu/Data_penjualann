import React from 'react';
import gmail from '../assets/gmail.png';
import youtube from '../assets/youtube.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png'; 

export const Footer = () => {
  return (
    <div className='pt-20 '>
       <div className='scroll-smooth bg-black w-full h-50 pb-8 '>
          <div className='flex justify-around text-2xl font-linkstyle text-white font-bold pt-10'>
              <h1> Start Clean  with CarsWasPro </h1>
              <button className='bg-ungukeren text-2xl font-linkstyle text-white font-bold py-4 px-7 rounded-xl'> Get started for free</button>
          </div>

          <div className='flex justify-around text-white pt-20'>
            
            <div className='flex flex-col gap-2'> 
              <h4 className='text-bold mb-2' > CarsPro </h4>
              <div className='flex items-center gap-2'>
                <img src={gmail} alt="email" className='h-7 w-7' />
                <span>Email</span>
              </div>
              <div className='flex items-center gap-2'>
                <img src={youtube} alt="youtube" className='h-7 w-7' />
                <span>YouTube</span>
              </div>
              <div className='flex items-center gap-2'>
                <img src={instagram} alt="instagram" className='h-7 w-7' />
                <span>Instagram</span>
              </div>
              <div className='flex items-center gap-2'>
                <img src={facebook} alt="facebook" className='h-7 w-7' />
                <span>Facebook</span>
              </div>
              
            </div>
          
            
            <div  >
              <h4 className='mb-4'> Explore </h4>

              <h5> Kartu member</h5>
              <h5> Kartu hilang</h5>
              <h5> Kadaluarsa member</h5>
            </div>

            <div>
              <h4 className='mb-4'> Resource </h4>

              <h5> Karyawan </h5>
              <h5> Alat dan Bahan </h5>
              <h5> Kualitas ait </h5>
            </div>
            
            <div>
             <h4 className='mb-4'> Company </h4>
             <h5> Awal berdiri</h5>
             <h5> Pemilik saham</h5>
             <h5> Perusahaan </h5>
            </div>
           
          
          </div>
       </div>
    </div>
  )
}
