import { faCalendarDays, faSun, faUser } from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function MainList({opend}){
    return(
      <div style={{opacity:opend?"100":"0"}}  className={`lg:hidden sm:block w-56 bg-white fixed top-14 z-50 overflow-x-hidden shadow-lg transition-all duration-500 rounded-e-lg h-screen `}>
      <Link href="/" className=' shadow-lg bg-orange-500 my-5 text-white hover:scale-105 active:text-orange-800 active:bg-white hover:bg-orange-800 flex justify-between items-center text-xl rounded-e-md px-3 py-2'>العربيه
      <FontAwesomeIcon className=' mx-2' icon={faGlobe} /></Link>
      <Link href="/" className=' shadow-lg bg-orange-500 my-5 text-white hover:scale-105 active:text-orange-800 active:bg-white hover:bg-orange-800 flex justify-between items-center text-xl rounded-e-md px-3 py-2'>تسجيل الدخول
      <FontAwesomeIcon className=' mx-2' icon={faUser} /></Link>
      <Link href="/" className=' shadow-lg bg-orange-500 my-5 text-white hover:scale-105 active:text-orange-800 active:bg-white hover:bg-orange-800 flex justify-between items-center text-xl rounded-e-md px-3 py-2'>{Date().toString().slice(0,25)}
      <FontAwesomeIcon className=' mx-2' icon={faCalendarDays} /></Link>
      <Link href="/" className=' shadow-lg bg-orange-500 my-5 text-white hover:scale-105 active:text-orange-800 active:bg-white hover:bg-orange-800 flex justify-between items-center text-xl rounded-e-md px-3 py-2'>18:31C
      <FontAwesomeIcon className=' mx-2' icon={faSun} /></Link>
      
      </div>
    )
   }