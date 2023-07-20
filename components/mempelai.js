import React from 'react'
import Image from 'next/image'
import f1 from '../public/flower1.png'
import f1br from '../public/flower1br.png'
import salam from '../public/salam.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Mempelai() {
    useEffect(() => {
        AOS.init({
          easing: 'ease-out-cubic',
          once: true,
          offset: 50,
          delay: 50,
        });
      });
  return (
    <section className='bg-wallwed1 h-[700px] lg:h-[800px] lg:bg-cover bg-auto relative overflow-hidden'>
      <Image src={f1} alt="" className='w-1/4  absolute z-30' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/>
        <div className='container lg:w-[1100px] flex justify-center px-4 py-12'>
          <div className='bg-fourth lg:w-[1000px] self-center rounded-xl w-96 py-4' data-aos="flip-left" data-aos-duration="1500">
              <Image src={salam}  alt='' className='scale-50 mx-auto'/>
              <p className='text-center mt-5 text-xs lg:text-lg font-Georgia px-8 text-black '>Maha suci Allah SWT yang telah menciptakan makhlukNya Berpasangan.Ya Allah perkenankan kami untuk melaksanakan pernikahan putra - putri kami :</p>
              <h1 className='px-4 text-center mt-10 lg:mt-10 text-3xl lg:text-6xl font-Georgia font-bold text-primary'>Lina Azhari</h1>
              <h1 className='px-12 text-center mt-2 text-xs lg:text-lg font-Georgia  text-black'>putri dari Bpk. Joko Prawoto (Alm) & Ibu Siti Halimah </h1>
              <h1 className='px-12 text-center mt-2 text-xs lg:text-lg font-Georgia  text-black'>Semarang, Jawa Tengah</h1>
              <h1 className='px-4 text-center mt-5 mb-5 text-3xl lg:text-6xl font-Georgia font-bold text-primary'>&</h1>
              <h1 className='px-4 text-center  text-3xl lg:text-6xl font-Georgia font-bold text-primary'>Satrio Adi Wiguno</h1>
              <h1 className='px-12 text-center mt-2 text-xs lg:text-lg font-Georgia  text-black'>putra dari Bpk. Warno (Alm) & Ibu Indasah
              Magelang, Jawa Tengah</h1>
              <p className='text-center mt-10 lg:mt-5 text-xs lg:text-lg font-Georgia px-10 text-black '>Dan diantara tanda-tanda kekuasaan-Nya 
                  diciptakan-Nya untukmu 
                  pasangan hidup dari jenismu sendiri  supaya kamu mendapat ketenangan hati 
                  dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang demikian 
                  menjadi tanda-tanda 
                  Kekuasaan-Nya bagi orang-orang yang  berfikir.
              </p>
              <h1 className='font-bold text-center font-Georgia mt-5 lg:text-xl text-sm text-black'>QS. Ar Ruum : 21</h1>
          </div>
        </div>
      <Image src={f1br} alt="" className='w-1/4  bottom-0 z-30 right-0 absolute' data-aos="fade-up"  data-aos-easing="linear"  data-aos-duration="1500"/>
      </section>
  )
}

export default Mempelai
