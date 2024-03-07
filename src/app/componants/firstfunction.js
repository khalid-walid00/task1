import React from 'react'
import '../globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Firstfunction() {
  return (
<>
<div className="bg-first">
  <div className=' bg-white absolute lg:w-96 lg:h-96 h-72 w-72 specialcontent shadow-2xl top-24 left-12 text-orange-500 rounded-full'>
    <div className=' flex font-sans'>
      <div className=' relative specialcontenttext lg:top-10 lg:left-8 top-6 left-6 '>
    <div className=' text-2xl specialtext lg:text-4xl text-center my-4 '>خدماتنا </div>
    <div className=' text-2xl specialtext lg:text-4xl text-end mt-2 '>سياره خاصه بسائق </div>
    <div className=' text-2xl specialtext lg:text-4xl text-end mt-2 '>حجز الفنادق </div>
    <div className=' text-2xl specialtext lg:text-4xl text-end mt-2 '>حجز قطارات </div>
    <div className=' text-2xl specialtext lg:text-4xl text-end  '> حجز سياحيه يومية </div>
  </div>
  <div className=' relative specialicon top-20 left-6 lg:top-28 lg:left-6 '>

<FontAwesomeIcon className='w-8 py-2 lg:m-3 m-2 text-white flex rounded-full bg-teal-500' icon={faArrowLeft} />
<FontAwesomeIcon className='w-8 py-2 lg:m-3 m-2 text-white flex rounded-full bg-teal-500' icon={faArrowLeft} />
<FontAwesomeIcon className='w-8 py-2 lg:m-3 m-2 text-white flex rounded-full bg-teal-500' icon={faArrowLeft} />
<FontAwesomeIcon className='w-8 py-2 lg:m-3 m-2 text-white flex rounded-full bg-teal-500' icon={faArrowLeft} />


  </div>
</div>
  </div>
</div>
</>  )
}
