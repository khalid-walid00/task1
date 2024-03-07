import Image from 'next/image'
import React from 'react'

export default function Function6() {
  return (<>
    <div className='flex justify-center my-5'>
         <div className='w-10/12 '>
         <div className='font-sans text-6xl font-bold text-center  '>السياحة في <span className='text-orange-600'>ارذبيجان</span></div>
         <div className='font-sans text-xl text-center my-5 '>
            <p>تتميز اردبیجان بالسياحة الدينية والمنتجعات الصحية وتعد دولة ثقافية جدا وتتمتع بالتضاريس المتنوعة والجميلة</p>
            <p>يحتفظ سكانها بالعديد من التقاليد الشعبية المميزه والشهيرة وتعد الخيول الجميلة والكافيار احدى الصادرات</p>
            <p>التقليدية الاكثر تميزا</p>
            </div>
            <div className='grid lg:gap-8 gap-3'>
             <div className='lg:flex grid place-items-center lg:gap-8 gap-3'>
                <div className=' min-w-64 w-8/12 lg:w-6/12 '>
                    <Image src={require('../Images/8.jpg')}  className=" w-full h-96 rounded-xl" />
                </div>
                <div className=' min-w-64 w-8/12 lg:w-6/12 '>
                    <Image src={require('../Images/9.jpg')}  className=" w-full h-96 rounded-xl" />
                     
                </div>
             </div>
             <div className='lg:flex grid place-items-center lg:gap-8 gap-3'>
                <div className=' min-w-64 w-8/12 lg:w-6/12 '>
                    <Image src={require('../Images/10.jpg')}  className=" w-full h-96 rounded-xl" />
                </div>
                <div className=' min-w-64 w-8/12 lg:w-6/12 '>
                    <Image src={require('../Images/11.jpg')}  className=" w-full h-96 rounded-xl" />
                     
                </div>
             </div>
             </div>
         </div>
         
    </div>
  </>)
}
