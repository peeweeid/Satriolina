import React from 'react'
import Image from 'next/image'
import f2l from '../public/flower2l.png'
import f2r from '../public/flower2r.png'
function Peta() {
  return (
    
    <section className='bg-wallwed2 lg:bg-cover bg-auto relative overflow-hidden' id='peta'>
      <h1 className='px-4 text-center mt-10 lg:mt-10 text-xl lg:text-2xl font-Georgia font-bold text-primary'>Lokasi</h1>
     < div className='justify-center items-center flex flex-wrap'>
    <Image src={f2r} alt="" className='w-1/4 lg:w-1/6  z-30' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/>
    
    <div className='container  w-2/6 lg:w-4/6 flex justify-center px-4 py-4 lg:py-12 mb-10'>
       <div className="px-4 py-4 bg-third rounded-xl"><div className="gmap_canvas">
              <iframe className='w-[250px] mx-auto lg:w-[500px] lg:h-[500px] h-[600px] rounded-xl' id="gmap_canvas" src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d349.99937224195986!2d110.42583877843842!3d-7.033848889887668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDInMDIuMSJTIDExMMKwMjUnMzMuNCJF!5e0!3m2!1sid!2sid!4v1689839188433!5m2!1sid!2sid'  ></iframe></div>
              
        </div>
    </div>
    <Image src={f2l} alt="" className='w-1/4 lg:w-1/6  z-30' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/>
    </div>
    </section>
   
  )
}

export default Peta
