"use client"
import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'
import { Data } from './Data'

export default function Function5Map() {
  return (
    
    <div className=' grid  lg:place-items-center sm:place-items-center place-items-center my-20 '>
       {Data.map((item ,key)=>{
        return(
        <div key={key} className='lg:w-9/12 w-11/12 my-5 shadowbutton justify-between lg:flex  p-3 font-sans '>
            <div className=' flex lg:hidden sm:flex'>
            <Image src={require('../../Images/6n.jpg')}  className=" w-full h-96 rounded-xl" />
        </div>
        <div className='w-2/12 flex lg:block my-2'>
            <div className=' h-3/6 mx-5'>
        <FontAwesomeIcon className=' size-12' icon={faQrcode} />
         </div>
         <div className='h-3/6 items-end grid'>
            <button className=' rounded-lg bg-green-500 p-3 max-w-max text-xl  text-white'>واتساب</button>
         </div>
        </div>
        <div className='lg:w-5/12   px-4'>
            <div className='text-orange-500 text-end text-3xl'>{item.title}</div>
            <div className=' my-5 text-end text-3xl'>{item.description}</div>
            <div className=' my-5 lg:flex justify-end'>
                <div className='lg:mx-10 text-lg  text-end text-teal-500 h-max text-nowrap'>{item.date}</div>
                <div className='lg:mx-10 text-lg  text-end text-teal-500 h-max text-nowrap line-through'>{item.offer}</div>
                <div className='lg:ms-10 text-lg  text-end text-orange-500 h-max text-nowrap'>{item.price}</div>
            </div>
            <div className=''>
    {item.about.map((aboutItem, index) => (
        <ul key={index} className='list-disc mx-5' style={{ direction: 'rtl' }}>
            <li className='text-lg text-gray-500'>{aboutItem}</li>
        </ul>
    ))}
</div>

        </div>
        <div className='lg:w-4/12 hidden lg:flex w-5/12'>
            <Image src={require('../../Images/6n.jpg')}  className=" w-full h-96 rounded-xl" />
        </div>
    </div>
       )})}
    </div>
  )
}
{/* <div className='w-10/12 shadowbutton flex p-3 font-sans '>
            <div className='w-2/12'>
                <div className=' h-3/6'>
            <FontAwesomeIcon className='w-14' icon={faQrcode} />
             </div>
             <div className='h-3/6 items-end grid'>
                <button className=' rounded-lg bg-green-500 p-3 max-w-max text-xl  text-white'>واتساب</button>
             </div>
            </div>
            <div className='w-8/12 px-4'>
                <div className='text-orange-500 text-end text-3xl'>عروض جورجيا</div>
                <div className=' my-5 text-end text-3xl'>العروض حتى نهاية شهر يناير</div>
                <div className=' my-5 flex justify-end'>
                    <div className='mx-10 text-lg text-teal-500'>8 ايام 7 ليالي</div>
                    <div className='mx-10 text-lg text-teal-500 line-through'>7,649 ريال</div>
                    <div className='ms-10 text-lg text-orange-500'>5,649 ريال</div>
                </div>
                <div className=''>
                    <ul className=' list-disc mx-5' style={{direction:'rtl'}}>
                        <li className=' text-lg text-gray-500'>توصيل مجاني</li>
                        <li className=' text-lg text-gray-500'>توصيل مجاني</li>
                        <li className=' text-lg text-gray-500'>توصيل مجاني</li>
                    </ul>
                </div>
            </div>
            <div className='w-4/12'>
                <Image src={require('../../Images/7.jpg')}  className=" w-full h-96 rounded-xl" />
            </div>
        </div> */}