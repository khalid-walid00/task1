import Image from 'next/image'
import React from 'react'

export default function Function4() {
  return (<>
    <div className='flex justify-center my-5'>
         <div className='w-10/12 '>
         <div className='font-sans text-6xl font-bold text-center  '>السياحة في <span className='text-orange-600'>جورجيا</span></div>
         <div className='font-sans text-xl text-center my-5 '>
            <p>تتميز جورجيا بجمال طبيعتها المذهلة حيث تضم جبال القوقاز والشواطي الرائعة والبحيرات الخلابة</p>
            <p>كما يمكنك التمتع بالتزلج ورحلات ل القرى التقليدية</p>
            <p>وتحتوى على الكثير من المناظر الطبيعية والساحرة والكثير من الحدائق الطبيعية</p>
            </div>
              <div className='grid lg:gap-8 gap-3'>
             <div className='lg:flex grid place-items-center lg:gap-8 gap-3'>
                <div className=' min-w-64 w-8/12 lg:w-6/12 '>
                    <Image src={require('../Images/3n.jpg')}  className=" w-full h-96 rounded-xl" />
                </div>
                <div className=' min-w-64 w-8/12 lg:w-6/12 '>
                    <Image src={require('../Images/2n.jpg')}  className=" w-full h-96 rounded-xl" />
                     
                </div>
             </div>
             <div className='lg:flex grid place-items-center lg:gap-8 gap-3'>
                <div className=' min-w-64 w-8/12 lg:w-6/12 '>
                    <Image src={require('../Images/4n.jpg')}  className=" w-full h-96 rounded-xl" />
                </div>
                <div className=' min-w-64 w-8/12 lg:w-6/12 '>
                    <Image src={require('../Images/5n.jpg')}  className=" w-full h-96 rounded-xl" />
                     
                </div>
             </div>
             </div>
         </div>
         
    </div>
  </>)
}
