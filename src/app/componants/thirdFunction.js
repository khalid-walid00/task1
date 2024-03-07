import Image from 'next/image';
import React from 'react';

export default function ThirdFunction() {
  return (
    <>
      <div className='flex justify-center my-20'>
        <div className='lg:flex w-10/12'>
          <div className='lg:w-6/12'>
          <Image src={require('../Images/2.jpg')}  className=" w-full" />
          </div>
          <div className='lg:w-6/12'>
            <div className='font-sans text-lg font-bold text-end'>افضل الواجهات حول العالم</div>
            <div className='font-sans text-3xl lg:text-5xl sm:text-3xl font-bold text-end lg:my-10 sm:my-8 my-2'>السفر الي  <span className='text-orange-500'> جورجيا و ارذبيجان</span>  </div>
            <div className='font-sans text-lg font-bold text-end'> يجب ان نجعل عطلات احلامك لا تنسي</div>
          </div>
        </div>
      </div>
    </>
  );
}
