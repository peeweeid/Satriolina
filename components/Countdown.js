import {useState,useEffect} from 'react'

export default function Countdown({newYear}) {
    const [days , setDays] = useState(0)
    const [hours , setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

useEffect(()=>{
    const timerId = setInterval(() => {
        const now = new Date().getTime()
        const distance = (newYear - now) / 1000
        if(distance > 0){
            const days = Math.floor(distance / 60 / 60 /24)
            const hours = Math.floor(distance / 60 / 60 % 24)
            const minutes = Math.floor((distance / 60) % 60 )
            const seconds = Math.floor(distance % 60)
            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)
        }else {
            clearInterval(timerId)
         }
        },1000)
    return ()=> clearInterval(timerId)
},[newYear])

  return (
    
       
        <div className=' flex flex-wrap justify-center items-center'>
            <div className='w-1/4 px-6 mt-5 mb-5'>
            <div className='rounded-xl mx-auto bg-white text-center flex items-center justify-center w-full lg:w-28 lg:h-28 h-14 font-bold text-primary'>{days} </div>
            <h1 className='text-center text-sm mt-2 text-white font-Georgia'>Hari</h1>
            </div>
            <div className='w-1/4 px-6 mt-5 mb-5'>
            <div className='rounded-xl mx-auto bg-white text-center flex items-center justify-center w-full lg:w-28 lg:h-28 h-14 font-bold text-primary '>{hours} </div>
            <h1 className='text-center text-sm mt-2 text-white font-Georgia'>Jam</h1>
            </div>
            <div className='w-1/4 px-6 mt-5 mb-5'>
            <div className='rounded-xl mx-auto bg-white text-center flex items-center justify-center w-full lg:w-28 lg:h-28 h-14 font-bold text-primary'>{minutes} </div>
            <h1 className='text-center text-sm mt-2 text-white font-Georgia'>Menit</h1>
            </div>
            <div className='w-1/4 px-6 mt-5 mb-5'>
            <div className='rounded-xl mx-auto bg-white text-center flex items-center justify-center w-full lg:w-28 lg:h-28 h-14 font-bold text-primary'>{seconds} </div>
            <h1 className='text-center text-white font-Georgia text-sm mt-2 '>Detik</h1>
            </div>
        </div>
   
    
  )
}
