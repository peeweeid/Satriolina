import React from 'react'
import Image from 'next/image'
import f1bl from '../public/flower1bl.png'
import f1tr from '../public/flower1tr.png'
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Tanggal() {
    useEffect(() => {
        AOS.init({
          easing: 'ease-out-cubic',
          once: true,
          offset: 50,
          delay: 50,
        });
      });
  return (
    <section className='bg-wallwed2 lg:bg-cover bg-auto relative overflow-hidden'>
      <Image src={f1tr} alt="" className='w-1/4 right-0 absolute z-30' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/> 
      <div className='container lg:w-[1100px] flex justify-center px-4 py-12'>
        <div className='bg-fourth lg:w-[1000px] self-center rounded-xl w-80 py-4' data-aos="flip-left" data-aos-duration="1500">
          <h1 className='px-4 text-center mt-10 lg:mt-10 text-xl lg:text-2xl font-Georgia font-bold text-primary'>Assallamualaikum Wr.Wb</h1>
          <p className='px-8 lg:px-10 font-Georgia lg:text-lg text-center text-sm mt-10'> sebagai ungkapan bahagia dan rasa syukur atas karuniaNya,
              kami bermaksud menyelenggarakan resepsi
              pernikahan putra putri kami pada :
          </p>
          <div className='flex flex-wrap px-4'>
              <div className='w-full lg:w-1/2 px-10 py-4'>
                  <div className='bg-white rounded-xl shadow-lg px-8 py-4'>
                    <h1 className='mt-5 font-Georgia text-primary font-bold text-center'>Akad Nikah :</h1>
                      <div className='flex items-center justify-center'>
                         <span className='px-2 text-primary text-ms font-Georgia'>Sabtu</span>
                         <span className='text-primary'>|</span>
                         <span className='px-2 text-primary text-2xl font-bold font-Georgia'>28</span>
                         <span className='text-primary'>|</span>
                         <span className='px-2 text-primary text-ms font-Georgia'>Oktober</span> 
                      </div>
                    <h1 className='text-center font-Georgia text-xs mt-4 text-primary'>Pukul 09.00 WIB -Selesei</h1>
                    <h1 className='text-center font-Georgia text-ms font-bold mt-2 text-primary'>Masjid Agung</h1>
                    <h1 className='text-center font-Georgia text-xs  text-black'>Jl.xxx.xxxx.xxxxx no xxx</h1>
                  <Link href={'#peta'}>  <button className='mt-4 rounded-lg bg-primary hover:bg-third py-1 px-8 mx-auto text-white w-full font-Georgia'>Lokasi</button></Link>
                  </div>
              </div>
              <div className='w-full lg:w-1/2 px-10 py-4'>
                  <div className='bg-white rounded-xl shadow-lg px-8 py-4'>
                    <h1 className='mt-5 font-Georgia text-primary font-bold text-center'>Resepsi Nikah :</h1>
                      <div className='flex items-center justify-center'>
                         <span className='px-2 text-primary text-ms font-Georgia'>Sabtu</span>
                         <span className='text-primary'>|</span>
                         <span className='px-2 text-primary text-2xl font-bold font-Georgia'>28</span>
                         <span className='text-primary'>|</span>
                         <span className='px-2 text-primary text-ms font-Georgia'>Oktober</span> 
                      </div>
                    <h1 className='text-center font-Georgia text-xs mt-4 text-primary'>Pukul 09.00 WIB -Selesei</h1>
                    <h1 className='text-center font-Georgia text-ms font-bold mt-2 text-primary'>Masjid Agung</h1>
                    <h1 className='text-center font-Georgia text-xs  text-black'>Jl.xxx.xxxx.xxxxx no xxx</h1>
                    <Link href={'#peta'}>  <button className='mt-4 rounded-lg hover:bg-third bg-primary py-1 px-8 mx-auto text-white w-full font-Georgia'>Lokasi</button></Link>
                  </div>
              </div>
          </div>
          <h1 className='text-sm lg:text-lg lg:px-10 px-4 text-center mt-5 text-black font-Georgia'>Merupakan kehormatan dan kebahagiaan bagi kami,
          apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan
          doa restu kepada kedua mempelai.</h1>
          <h1 className='px-4 text-center mt-10 lg:mt-10 text-xl lg:text-2xl font-Georgia font-bold text-primary'>Waallaikumsallam Wr.Wb</h1>
          <h3 className='text-center text-sm lg:text-lg text-black font-Georgia mt-2 lg:mt-4'>Kami yang berbahagia</h3>
          <h1 className='mt-5 font-Authentic text-5xl lg:text-7xl text-center text-primary '>Satrio <span className='text-lg lg:text-3xl'>&</span> Lina</h1>
        </div>
      </div>
      <Image src={f1bl} alt="" className='w-1/4 bottom-0 absolute z-30' data-aos="fade-up" data-aos-easing="linear"  data-aos-duration="1500"/>
      </section>
  )
}

export default Tanggal
