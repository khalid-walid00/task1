import Image from 'next/image'
import React from 'react'

export default function Function7() {
  return (
    <div className='flex justify-center font-sans'>
     <div className='w-10/12'>
        <div className=' text-5xl text-end'>نحن نقدم افضل الخدمات</div>
        <div className='flex items-center justify-end text-xl my-5'> سيارة خاصه وسائق<Image src={require('../Images/car.png')}
         width={70} height={70}  className="ms-4 rounded-xl p-2 shadowbutton" /></div>
          <div className='flex items-center justify-end text-xl my-5'>حجوزات فنادق<Image src={require('../Images/review.png')}
         width={70} height={70}  className="ms-4 rounded-xl p-2 shadowbutton" /></div>
          <div className='flex items-center justify-end text-xl my-5'>حجز قطارات<Image src={require('../Images/train.png')}
         width={70} height={70}  className="ms-4 rounded-xl p-2 shadowbutton" /></div>
          <div className='flex items-center justify-end text-xl my-5'>جولات سياحية يوميه<Image src={require('../Images/earth.png')}
         width={70} height={70}  className="ms-4 rounded-xl p-2 shadowbutton" /></div>
        </div>
     </div>
   
  )
}
