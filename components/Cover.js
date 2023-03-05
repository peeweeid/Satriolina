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
    <section className='bg-secondary h-[800px]'>
        <div className='container flex justify-center items-center'>
          <Image src={f3} alt="" className='w-1/4 lg:w-64' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/>
          <div className='bg-primary h-[800px] w-1/2'>
              <h1 className='text-center font-thin text-white font-Georgia mt-10 text-xl px-14 'data-aos="fade-down" data-aos-duration="1000">THE</h1>
              <h1 className='text-center font-thin text-white font-Georgia  text-xl px-14 'data-aos="fade-down" data-aos-duration="1000">WEDDING</h1>
              <h1 className='text-center font-thin text-white font-Georgia  text-xl px-14 'data-aos="fade-down" data-aos-duration="1000">OF</h1>
              <h1 className='text-center font-thin text-white font-Authentic mt-40 lg:mt-16 text-7xl lg:text-9xl px-14 'data-aos="zoom-in-down" data-aos-duration="1000">Lina</h1>
              <h1 className='text-center font-thin text-white font-Authentic  text-5xl px-14 lg:text-7xl'data-aos="zoom-in-down" data-aos-duration="1000">&</h1>
              <h1 className='text-center font-thin text-white font-Authentic  text-7xl px-14 lg:text-9xl'data-aos="zoom-in-down" data-aos-duration="1000">Satrio</h1>
              <h1 className='text-center font-thin text-white font-Georgia  text-2xl px-14 mt-44 lg:mt-36 lg:text-3xl'data-aos="fade-up" data-aos-duration="1000">Oktober</h1>
              <h1 className='text-center font-thin text-white font-Georgia  text-base px-14  lg:text-lg'data-aos="fade-up" data-aos-duration="1000">15.10.2023</h1>
          </div>
          <Image src={f4} alt="" className='w-1/4 lg:w-64' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/>
        </div>
      </section>
  )
}

export default Cover