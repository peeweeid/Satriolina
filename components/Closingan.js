import React from 'react'
import Image from 'next/image'
import f3 from '../public/flower3.png'
import f4 from '../public/flower4.png'
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Closingan() {
    useEffect(() => {
        AOS.init({
          easing: 'ease-out-cubic',
          once: true,
          offset: 50,
          delay: 50,
        });
      });
  return (
    <section className='bg-secondary lg:h-[800px] h-[650px] overflow-hidden  '>
    <div className='container bg-secondary flex flex-wrap justify-center items-center lg:py-0 py-8 '>
      <Image src={f3} alt="" className='w-1/4 ' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/>
      <div className='bg-primary  h-[600px] lg:h-[900px] lg:rounded-none rounded-full w-1/2 mx-auto '>
          <h1 className='text-center font-thin text-white font-Georgia mt-20 text-lg px-2 'data-aos="fade-down" data-aos-duration="1000">Kami yang berbahagia</h1>
          <h1 className='text-center font-thin text-white font-Authentic mt-10 lg:mt-16 text-7xl lg:text-9xl  'data-aos="zoom-in-down" data-aos-duration="1000">Lina</h1>
          <h1 className='text-center font-thin text-white font-Authentic  text-5xl  lg:text-7xl'data-aos="zoom-in-down" data-aos-duration="1000">&</h1>
          <h1 className='text-center font-thin text-white font-Authentic  text-7xl  lg:text-9xl'data-aos="zoom-in-down" data-aos-duration="1000">Satrio</h1>
          <h1 className='text-center font-thin text-white font-Georgia  text-2xl mt-20 lg:mt-36 lg:text-3xl'data-aos="fade-up" data-aos-duration="1000"></h1>
         <div className='px-4 py-4 lg:w-60 mx-auto'><Link href={'https://www.instagram.com/lensa.design2/'}> <h1 className='text-center mx-auto py-2  font-thin text-primary hover:text-slate-500 font-Georgia shadow-xl text-sm rounded-lg bg-secondary hover:bg-third lg:text-lg' data-aos="fade-up" data-aos-duration="1000">@lensa.design2</h1></Link> 
         </div>
      </div>
      <Image src={f4} alt="" className='w-1/4 ' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/>
    </div>
  </section>
  )
}

export default Closingan
