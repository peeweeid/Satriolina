import React from 'react'
import Image from 'next/image'
import f1bl from '../public/flower1bl.png'
import f1tr from '../public/flower1tr.png'

import bca from '../public/bca.png'
import bni from '../public/bni.png'
import mandiri from '../public/mandiri.png'
import { useEffect } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Hadiah() {
    useEffect(() => {
        AOS.init({
          easing: 'ease-out-cubic',
          once: true,
          offset: 50,
          delay: 50,
        });
      });
  return (
    <section className='bg-wallwed lg:bg-cover bg-auto relative overflow-hidden'>
      <Image src={f1tr} alt="" className='w-1/4 right-0 absolute z-30' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/>
      <div className='container lg:w-[1100px] flex justify-center px-4 py-12'>
        <div className='bg-fourth lg:w-[1000px] self-center rounded-xl w-80 py-4' data-aos="flip-left" data-aos-duration="1500">
          <h1 className='px-4 text-center mt-10 lg:mt-10 text-xl lg:text-2xl font-Georgia font-bold text-primary'>Kirim Hadiah</h1>
          <div className='flex flex-wrap px-4'>
              <div className='w-full lg:w-1/2 px-10 py-4'>
                  <div className='bg-white rounded-xl shadow-lg px-8 py-4'>
                    <Image src={bca} alt='' className='scale-75 mx-auto mb-8'/>
                    <h1 className='text-center font-Georgia text-lg font-bold mt-2 text-primary'>Satrio Adi Wiguno</h1>
                    <h1 className='text-center font-Georgia text-ms  text-black'> 8465269479</h1>
                    <CopyToClipboard text="8465269479">
                    <button className='mt-4 rounded-lg bg-primary hover:bg-third py-1 px-8 mx-auto text-white w-full font-Georgia'>Copy Rekening</button>
                    </CopyToClipboard>
                  </div>
              </div>
              <div className='w-full lg:w-1/2 px-10 py-4'>
                  <div className='bg-white rounded-xl shadow-lg px-8 py-4'>
                    <Image src={mandiri} alt='' className='scale-75 mx-auto mb-8'/>
                    <h1 className='text-center font-Georgia text-lg font-bold mt-2 text-primary'>Lina Azhari</h1>
                    <h1 className='text-center font-Georgia text-ms  text-black'>1350017198274</h1>
                    <CopyToClipboard text="1350017198274">
                    <button className='mt-4 rounded-lg bg-primary hover:bg-third py-1 px-8 mx-auto text-white w-full font-Georgia'>Copy Rekening</button>
                    </CopyToClipboard>
                  </div>
              </div>
          </div>
          
        </div>
      </div>
      <Image src={f1bl} alt="" className='w-1/4 bottom-0 absolute z-30' data-aos="fade-up" data-aos-easing="linear"  data-aos-duration="1500"/>
      </section>
  )
}

export default Hadiah
