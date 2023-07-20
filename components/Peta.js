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
              <iframe className='w-[250px] mx-auto lg:w-[500px] lg:h-[500px] h-[600px] rounded-xl' id="gmap_canvas" src='https://maps.google.com/maps?q=yogyakarta , jl cantel no 15&t=&z=20&ie=UTF8&iwloc=&output=embed'  ></iframe></div>
                 <iframe src="https://www.google.com/maps/embed?pb=!4v1689838662792!6m8!1m7!1s2l1afN5GFe7t6bZ4yon3iQ!2m2!1d-7.793720342888053!2d110.3879647785997!3f186.8380725341026!4f-4.142376452494531!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <Image src={f2l} alt="" className='w-1/4 lg:w-1/6  z-30' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/>
    </div>
    </section>
   
  )
}

export default Peta
