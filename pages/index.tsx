import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import f1 from '../public/flower1.png'
import wedicon from '../public/wedding.ico'
import f1br from '../public/flower1br.png'
import Mempelai from '../components/mempelai.js'
import Tanggal from '../components/Tanggal.js'
import Hadiah from '../components/Hadiah.js'
import Cover from '../components/Cover.js'
import { useEffect } from 'react';
import TodoList from '../components/TodoList.js'
import TodoForm from '../components/TodoForm.js'
import Countdown from '../components/Countdown.js'
import Peta from '../components/Peta.js'
import Closingan from '../components/Closingan.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  const newYear = new Date("Oct 07,2023").getTime()
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
    <>
      <Head>
        <title>Satrio & Lina</title>
        <meta name="description" content="Undangan Satrio & Lina" />
        <meta name="wedicon" content="width=device-width, initial-scale=1" />
        <link rel="wedicon" href="/favicon.ico" />
      </Head>
      {/* cover */}
      <Cover/>
      {/* keterangan mempelai */}
      <Mempelai />
      {/* tanggal */}
      <Tanggal />
      {/* countdown */}
      <section className='bg-primary bg-contain  overflow-hidden bg-fixed h-52  lg:h-72 flex items-center justify-center'>
        <div className='container px-4 py-4 '>
          <h1 className='mb-5 font-bold mt-5 mx-auto text-2xl lg:text-3xl text-center font-Georgia text-white'>7 Oktober 2023</h1>
           <Countdown newYear={newYear}/>
        </div>
      </section>
      {/* kirim hadiah */}
      <Hadiah/>
      {/* ucapan dan doa */}
      <section className='bg-wallwed1 relative overflow-hidden   '>
      <Image src={f1} alt="" className='w-1/4  absolute z-30 scale-50' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/>
       <div className='container px-4 py-12'>
       <h1 className='px-4 text-center mt-10 mb-10 lg:mt-10 text-xl lg:text-2xl font-Georgia font-bold text-primary'>Ucapan & Doa</h1>
          <div className='bg-fourth lg:w-[600px] mx-auto rounded-xl w-80 py-4' data-aos='flip-left'  data-aos-duration="1500">
            <TodoForm/>
              <div className='lg:px-8 px-4 py-2 lg:py-4 rounded-lg'>
                <TodoList/>
              </div>
            </div>
       </div>
      <Image src={f1br} alt="" className='w-1/4 right-0 bottom-0 absolute z-30 lg:w-56' data-aos="fade-up" data-aos-easing="linear"  data-aos-duration="1500"/>
      </section>
      {/* peta */}
      
          <Peta/>
          {/* closingan */}
          <Closingan/>
     
    </>
  )
}
