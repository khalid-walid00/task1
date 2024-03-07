"use client"
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCalendarDays, faGlobe, faListUl, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MainList from './Side'
 

export default function NavBar() {
  const [opend,setopend] = useState(false)




  return (
    <div className=' bg-white flex sticky top-0 z-50 shadow-lg font-sans lg:w-full justify-between lg:justify-around lg:px-5 px-0 py-3  items-center'>
      <FontAwesomeIcon className=' text-orange-500 lg:hidden  flex size-8' onClick={()=>setopend(!opend)} icon={faListUl} />
  <MainList opend={opend} />
     
     <div className=' lg:flex hidden'> 
      <button className=' shadow-lg text-orange-500 lg:me-6 w-28 h-10 flex items-center text-xl rounded-md px-3 py-2'>العربيه
      <FontAwesomeIcon className=' mx-2' icon={faGlobe} /></button>
     <button className=' shadow-lg bg-orange-600 text-white w-max  flex items-center text-xl rounded-md lg:px-3 py-2'>
      <FontAwesomeIcon className=' mx-2 w-8' icon={faUser} />تسجيل الدخول</button>
      
      <div className=' flex  text-gray-500 items-center '><FontAwesomeIcon className='text-orange-500 w-6 mx-2' icon={faCalendarDays} />{Date().toString().slice(0,25)}</div>
      <div className=' flex  text-gray-500 items-center '><FontAwesomeIcon className='text-orange-500 w-6 mx-2' icon={faSun} />18:31C</div>
   
     </div> 
      <div className=' text-2xl'>
        <span className=' text-orange-500 uppercase mx-1'>we</span>
        <span className=' text-teal-500 uppercase'>travellers</span>
     </div>
    </div>
  )
}
