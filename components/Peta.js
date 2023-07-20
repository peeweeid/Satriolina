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
        <div className="px-4 py-4 bg-third rounded-xl"><div class="mapouter"><div class="gmap_canvas"><iframe width="770" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=7°02'02.1"S 110°25'33.4"E&t=&z=20&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co">2yu</a><br><style>.mapouter{position:relative;text-align:right;height:510px;width:770px;}</style><a href="https://embedgooglemap.2yu.co">html embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:510px;width:770px;}</style></div></div></div>
    </div>
    <Image src={f2l} alt="" className='w-1/4 lg:w-1/6  z-30' data-aos="fade-down" data-aos-easing="linear"  data-aos-duration="1500"/>
    </div>
    </section>
   
  )
}

export default Peta
