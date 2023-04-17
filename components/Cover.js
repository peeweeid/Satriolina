import React from 'react'
import Image from 'next/image'
import f3 from '../public/flower3.png'
import f4 from '../public/flower4.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Cover() {
    useEffect(() => {
        AOS.init({
          easing: 'ease-out-cubic',
          once: true,
          offset: 50,
          delay: 50,
        });
      });
  return (
    <section className='bg-wallwed lg:h-[1100px] h-[800px] lg:bg-cover bg-contain overflow-hidden'>
        <div className='container flex flex-wrap justify-center items-center lg:py-0 py-8 mt-6 lg:mt-0'>
          <Image src={f3} alt="" className='w-1/4 ' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/>
          <div className='bg-primary lg:h-[1100px] h-[600px] lg:rounded-none rounded-full w-1/2 mx-auto'>
              <h1 className='text-center font-thin text-white font-Georgia mt-10 text-xl  'data-aos="fade-down" data-aos-duration="1000">THE</h1>
              <h1 className='text-center font-thin text-white font-Georgia  text-xl  'data-aos="fade-down" data-aos-duration="1000">WEDDING</h1>
              <h1 className='text-center font-thin text-white font-Georgia  text-xl 'data-aos="fade-down" data-aos-duration="1000">OF</h1>
              <h1 className='text-center font-thin text-white font-Authentic mt-20 lg:mt-16 text-7xl lg:text-9xl  'data-aos="zoom-in-down" data-aos-duration="1000">Lina</h1>
              <h1 className='text-center font-thin text-white font-Authentic  text-5xl  lg:text-7xl'data-aos="zoom-in-down" data-aos-duration="1000">&</h1>
              <h1 className='text-center font-thin text-white font-Authentic  text-7xl  lg:text-9xl'data-aos="zoom-in-down" data-aos-duration="1000">Satrio</h1>
              <h1 className='text-center font-thin text-white font-Georgia  text-2xl  mt-14 lg:mt-36 lg:text-3xl'data-aos="fade-up" data-aos-duration="1000">Oktober</h1>
              <h1 className='text-center font-thin text-white font-Georgia  text-base   lg:text-lg'data-aos="fade-up" data-aos-duration="1000">15.10.2023</h1>
          </div>
          <Image src={f4} alt="" className='w-1/4 ' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/>
        </div>
      </section>
  )
}

export default Cover
