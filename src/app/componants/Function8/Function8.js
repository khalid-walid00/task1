import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { DataForClient } from './Data'

export default function Function8() {
   
  return (
    <div className='flex justify-center font-sans'>
        <div className='w-10/12'>
            <div className='text-5xl text-center '>اراء عملائنا</div>
            <div className=' grid lg:grid-cols-4  sm:grid-cols-2 gap-5 my-16'>
                {DataForClient.map((item)=>{
                    return(
                        <div className=' bg-teal-500 rounded-xl p-4 '>
                        <div className='flex text-3xl items-center text-white justify-end mb-5'>
                               {item.name} <Image src={item.img}  className=" w-16 h-16 mx-3  rounded-full" />
                        </div>
                        <div className=' text-center text-lime-50'>{item.description}</div>
                        <div className=' justify-center my-5 flex mb-10'>
                            <FontAwesomeIcon icon={faStar} className=' text-yellow-400 w-8' />
                            <FontAwesomeIcon icon={faStar} className=' text-yellow-400 w-8' />
                            <FontAwesomeIcon icon={faStar} className=' text-yellow-400 w-8' />
                            <FontAwesomeIcon icon={faStar} className=' text-yellow-400 w-8' />
                            <FontAwesomeIcon icon={faStar} className=' text-yellow-400 w-8' />
                        </div>
                    </div>
                    )
                })} 
               
            </div>
        </div>

    </div>
  )
}
{/* <div className=' bg-teal-500 rounded-xl p-4 '>
<div className='flex text-3xl items-center text-white justify-end mb-5'>
      خالد وليد <Image src={require('../../Images/my.jpg')}  className=" w-16 h-16 mx-3  rounded-full" />
</div>
<div className=' text-center text-lime-50'>ارقي والطف مكان</div>
<div className=' justify-center my-5 flex mb-10'>
    <FontAwesomeIcon icon={faStar} className=' text-yellow-400 w-8' />
    <FontAwesomeIcon icon={faStar} className=' text-yellow-400 w-8' />
    <FontAwesomeIcon icon={faStar} className=' text-yellow-400 w-8' />
    <FontAwesomeIcon icon={faStar} className=' text-yellow-400 w-8' />
    <FontAwesomeIcon icon={faStar} className=' text-yellow-400 w-8' />
</div>
</div> */}